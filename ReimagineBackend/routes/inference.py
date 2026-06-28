# Home for inference routes
from openai import AzureOpenAI
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


def generateImageChangelist(client: AzureOpenAI, inferenceRequest: InferenceRequest) -> str:
    
    # Construct image data URL 
    data_url = f"data:image/{inferenceRequest.image_type};base64,{inferenceRequest.image_data}"

    return  client.responses.create(
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

@router.post("/inference")
def inference(request: Request, inferenceRequest: InferenceRequest): # TODO: Write this function

    client : AzureOpenAI = request.app.state.inferenceClient
    changelist: str = generateImageChangelist(client, inferenceRequest)
    
    # Algorithm steps:
    # 1) Get image from post parameters
    # 2) Send image to Azure openAI transformer and generate changelist
    # 3) Pass changelist + image to Stable Diffusion model to generate image
    # 4) Return image
    
    return changelist

# We have multiple ways to do this:
# 1) We expose only one inference endpoint and handle the pipeline server side
# 2) We expose two interference endpoints and orchestrate the pipeline client side