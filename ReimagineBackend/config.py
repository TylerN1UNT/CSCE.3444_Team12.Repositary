# Static Config
import os
import argon2
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.security import HTTPBearer


JWT_ALGORITHM="HS256"

# Load API key
load_dotenv() # Read .env file into local environment
INFERENCE_API_KEY = os.getenv("INFERENCE_API_KEY")
SECRET_KEY = os.getenv("SECRET_KEY")

# Initialize Server
password_hasher = argon2.PasswordHasher()
security = HTTPBearer()