import os
import argon2
from fastapi.concurrency import asynccontextmanager
import jwt

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from models.user import User
from sqlmodel import create_engine, SQLModel, Session, select
from routes.auth import router as auth_router


# Manage server lifecycle
@asynccontextmanager
async def lifespan(app: FastAPI):

    # Load keys
    load_dotenv() # Read .env file into local environment
    app.state.INFERENCE_API_KEY = os.getenv("INFERENCE_API_KEY")
    app.state.JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

    # Initialize Server
    app.state.password_hasher = argon2.PasswordHasher()
    app.state.security = HTTPBearer()
    
    # Initialize DB
    SQL_DATABASE_URL = os.getenv("SQL_DATABASE_URL")
    app.state.sql_engine = create_engine(SQL_DATABASE_URL)
    SQLModel.metadata.create_all(app.state.sql_engine, checkfirst=True) # Create required DB tables if they don't exist

    yield


# Initialize server
app = FastAPI(lifespan=lifespan)
app.include_router(auth_router)


        
        






    
