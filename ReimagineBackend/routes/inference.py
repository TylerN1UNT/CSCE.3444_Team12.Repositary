# Home for inference routes
from openai import AzureOpenAI
from fastapi import APIRouter, Request

# Should we pass the prompt or should the server handle that?
# Additionally, do we want to have a pipeline with one inferene endpoint or do two calls?
class Prompt:
    image: bytes # Base64 encoded bytes
    prompt: str # The prompt itself



router = APIRouter()

@router.post("/image-to-text")
def imageToTextInference(request: Request):
    client: AzureOpenAI = request.app.state.openaiClient
    
    pass

@router.post("/image-to-image")
def imageToImageInference(request: Request): 
    client: AzureOpenAI = request.app.state.openaiClient
    pass 