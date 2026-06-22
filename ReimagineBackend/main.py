import os
import argon2
import jwt

from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from models.user import User
from sqlmodel import create_engine, SQLModel, Session, select

# Pull in environment variables
load_dotenv() # Read .env file into local environment

# Initialize server
app = FastAPI()

# Initialize DB
SQL_DATABASE_URL = os.getenv("SQL_DATABASE_URL")
engine = create_engine(SQL_DATABASE_URL)
SQLModel.metadata.create_all(engine, checkfirst=True) # Create required DB tables if they don't exist

def generateJWT(user : User):
    return jwt.encode(
            {"username" : user.username}, 
            SECRET_KEY, 
            algorithm=JWT_ALGORITHM
)


# Setup Routes
@app.post("/signup")
def signup(username : str, password : str): # Sending the raw password here may be a security vuln

    # Construct user object
    hashed_password = password_hasher.hash(password)
    new_user = User(username=username, password_hash=hashed_password)

    # Add the user object to DB
    with Session(engine) as session:
        session.add(new_user)
        session.commit()

    # Generate the JWT
    generateJWT(new_user)


@app.post("/login")
def login(username : str, password : str):
    with Session(engine) as session:
        statement = select(User).where(User.name == username)
        user = session.exec(statement).first()

        if(user != None and password == user.password_hash):
            return generateJWT(user)
        else:
            raise HTTPException(
                status_code=401,
                detail="Invalid username or password")
        

@app.post("/inference")
def inference(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):

        
        






    
