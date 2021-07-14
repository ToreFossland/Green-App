from sqlalchemy.sql.sqltypes import Date
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    is_active: bool = True
    is_superuser: bool = False
    first_name: str = None
    last_name: str = None
    company: t.Optional[str] = "Equinor"
    points: t.Optional[int] = 0


class UserOut(UserBase):
    pass


class UserCreate(UserBase):
    password: str

    class Config:
        orm_mode = True


class UserEdit(UserBase):
    password: t.Optional[str] = None

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"


class ActivityBase(BaseModel):
    name: str
    points: int = 0


class Activity(ActivityBase):
    id: int

    class Config:
        orm_mode = True


class ChallengeBase(BaseModel):
    name: str
    points: int = 0


class Challenge(ChallengeBase):
    id: int

    class Config:
        orm_mode = True
