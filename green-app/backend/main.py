from typing import Optional

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel

fake_users_db = {
    "johndoe@mail.com": {
        "name": "John Doe",
        "company": "Equinor",
        "points" : 150,
        "disabled": False,
        "hashed_password": "fakehashedsecret",
    },
      "therese@mail.com": {
        "name": "Therese Sigmundstad",
        "company": "Equinor",
        "points" : 200,
        "disabled": False,
        "hashed_password": "fakehashedsecret",
    },
     "benedicte@mail.com": {
        "name": "Benedicte Rimmereid",
        "company": "Equinor",
        "points" : 340,
        "disabled": False,
        "hashed_password": "fakehashedsecret",
    },
    "tore@mail.com": {
        "name": "Tore Fossland",
        "company": "Equinor",
        "points" : 250,
        "disabled": False,
        "hashed_password": "fakehashedsecret",
    },  
     "elise@mail.com": {
        "name": "Elise Muller",
        "company": "Equinor",
        "points" : 250,
        "disabled": False,
        "hashed_password": "fakehashedsecret",
    },
    }

app = FastAPI()


def fake_hash_password(password: str):
    return "fakehashed" + password


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class User(BaseModel):
    name: str 
    company: str
    points: int
    disabled: Optional[bool] = None


class UserInDB(User):
    hashed_password: str


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def fake_decode_token(token):
    # This doesn't provide any security at all
    # Check the next version
    user = get_user(fake_users_db, token)
    return user


async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    return current_user


@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.hashed_password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {"access_token": user.name, "token_type": "bearer"}


@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user