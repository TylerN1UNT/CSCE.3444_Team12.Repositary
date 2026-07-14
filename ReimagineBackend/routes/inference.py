# Home for inference routes
import base64
from io import BytesIO
from openai import OpenAI
from fastapi import APIRouter, Request
from pydantic import BaseModel

# Should we pass the prompt or should the server handle that?
# Additionally, do we want to have a pipeline with one inferene endpoint or do two calls?

class InferenceRequest(BaseModel):
    user_prompt: str
    image_data: str # Base64
    image_type: str # png, jpg, etc (passed to the model)

router = APIRouter()

"""


from openai import AzureOpenAI

client = AzureOpenAI(
    api_key="<YOUR_API_KEY>",
    azure_endpoint="https://<YOUR_RESOURCE>.openai.azure.com",
    api_version="2025-04-01-preview",  # Use the API version for your deployment
)


def analyze_image(
    deployment: str,
    image_base64: str,
    user_prompt: str,
    system_prompt: str,
    image_mime_type: str = "image/png",
) -> str:
    
    Sends a base64-encoded image and prompts to an Azure OpenAI vision model.

    Args:
        deployment: Azure deployment name.
        image_base64: Base64-encoded image (without the data: prefix).
        user_prompt: Prompt describing what to do with the image.
        system_prompt: System instructions for the model.
        image_mime_type: MIME type of the image (e.g. image/png, image/jpeg).

    Returns:
        The model's text response.
    

    data_url = f"data:{image_mime_type};base64,{image_base64}"

    response = client.chat.completions.create(
        model=deployment,
        messages=[
            {
                "role": "system",
                "content": system_prompt,
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": user_prompt,
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": data_url,
                        },
                    },
                ],
            },
        ],
    )

    return response.choices[0].message.content

"""


def generateImageChangelist(client: OpenAI, inferenceRequest: InferenceRequest) -> str:
    
    # Construct image data URL 
    data_url = f"data:image/{inferenceRequest.image_type};base64,{inferenceRequest.image_data}"

    response = client.responses.create(
            model="gpt-5",
            input=[
                
                # Setup instructions & constaints
                {   
                    "role": "system",
                    "content" : """

                        You are an AI interior designer. You respond to images by generating 
                        an image edit list based on the user prompt. 
                        
                        Never assume anything about the image; Only act on what you can see.
                        Do not change image perspective.
                        Maintain core structural details.

                        Output only the image changelist, nothing else


                    """
                },

                # Pass in user prompt & image data
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "input_text",
                            "text": inferenceRequest.user_prompt
                        },
                        {
                            "type": "input_image",
                            "image_url": data_url
                        }
                    ]
                }
            ]
    )

    return response.output_text

def editImage(client: OpenAI, inferenceRequest: InferenceRequest, changelist: str) -> str:
    
    # Construct image data URL 
    # data_url = f"data:image/{inferenceRequest.image_type};base64,{inferenceRequest.image_data}"
    
    # Construct in-memory file over base64 bytes
    image_file = BytesIO(base64.b64decode(inferenceRequest.image_data))
    image_file.name = "image_to_edit." + inferenceRequest.image_type

    # Construct prompt
    constraints = """ 

        - Do not change camera view or perspective. 
        - Do not destroy structural details.
    
    """
    edit_prompt = constraints + changelist
                                          
    response = client.images.edit(
        model="gpt-image-2",
        image=image_file,
        prompt=edit_prompt
    )

    return response.data[0].b64_json

@router.post("/inference")
def inference(request: Request, inferenceRequest: InferenceRequest):

    client : OpenAI = request.app.state.inferenceClient
    changelist: str = generateImageChangelist(client, inferenceRequest)
    return {"image": editImage(client, inferenceRequest, changelist)}
