import jwt

class JWTManager:

    algorithm: str
    secret_key: str

    def __init__(self, secret_key:str, algorithm:str = "HS256"):
        self.secret_key = secret_key
        self.algorithm = algorithm

        

