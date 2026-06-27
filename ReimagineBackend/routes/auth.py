# Home for authentication routes
import argon2
from fastapi import APIRouter, Depends,  HTTPException, Request
import jwt
from pydantic import BaseModel
from config import *
from models.user import User
from sqlmodel import Session, select

class AuthenticationCredentials(BaseModel):
    username : str
    password : str


router = APIRouter()

# Setup Routes
@router.post("/signup")
def signup(request : Request, credentials : AuthenticationCredentials): # Sending the raw password here may be a security vuln

    # Construct user object
    hashed_password = request.app.state.password_hasher.hash(credentials.password)
    new_user = User(username=credentials.username, password_hash=hashed_password)

    # Add the user object to DB
    with Session(request.app.state.sql_engine) as session:
        session.add(new_user)
        session.commit()

    # Generate the JWT
    return jwt.encode({"username" : credentials.username}, request.app.state.JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)


# Verifies if plaintext patches a hash
def verifyHash(password_hasher, hash:str, plaintext:str) -> bool:
    try:

        password_hasher.verify(hash, plaintext) # Throws an error if hash does not match plaintext
        return True
    
    except:

        return False


@router.post("/login")
def login(request : Request, credentials : AuthenticationCredentials):
    with Session(request.app.state.sql_engine) as session:

        # Get user object
        statement = select(User).where(User.username == credentials.username)
        user = session.exec(statement).first()

        # Verify password
        if(user != None and verifyHash(request.app.state.password_hasher, user.password_hash, credentials.password)):
            return jwt.encode(
                {"username" : credentials.username}, 
                request.app.state.JWT_SECRET_KEY,
                algorithm=JWT_ALGORITHM
            )
        else: 
            raise HTTPException(
                status_code=401,
                detail="Invalid username or password")
