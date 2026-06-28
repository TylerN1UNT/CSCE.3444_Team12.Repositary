import os
import argon2
from fastapi.concurrency import asynccontextmanager

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.security import HTTPBearer
from sqlmodel import create_engine, SQLModel
from config import *
from routes.auth import router as auth_router
from routes.inference import router as inference_router
from openai import AzureOpenAI, OpenAI


# Manage server lifecycle
@asynccontextmanager
async def lifespan(app: FastAPI):

    # Load environment variables to local environment
    load_dotenv()

    # Initialize Security
    app.state.JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    app.state.password_hasher = argon2.PasswordHasher()
    app.state.security = HTTPBearer()

    # Initialize Azure OpenAI Client
    INFERENCE_API_KEY = os.getenv("INFERENCE_API_KEY")
    INFERENCE_API_ENDPOINT = os.getenv("INFERENCE_API_ENDPOINT")
    app.state.inferenceClient = OpenAI(api_key=INFERENCE_API_KEY, 
                                            base_url=INFERENCE_API_ENDPOINT,
                                            )
    
    # Initialize DB
    SQL_DATABASE_URL = os.getenv("SQL_DATABASE_URL")
    app.state.sql_engine = create_engine(SQL_DATABASE_URL)
    SQLModel.metadata.create_all(app.state.sql_engine, checkfirst=True) # Create required DB tables if they don't exist

    yield


# Connect routes
app = FastAPI(lifespan=lifespan)
app.include_router(auth_router)
app.include_router(inference_router)


        
        






    
