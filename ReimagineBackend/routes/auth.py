# Home for authentication routes
import argon2
from fastapi import APIRouter,  HTTPException
from models.user import User
from sqlmodel import Session, select

router = APIRouter()

# Setup Routes
@router.post("/signup")
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


@router.post("/login")
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