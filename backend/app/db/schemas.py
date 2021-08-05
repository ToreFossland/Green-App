from sqlalchemy.sql.sqltypes import ARRAY
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    is_active: bool = True
    is_superuser: bool = True
    first_name: str = None
    last_name: str = None
    company: t.Optional[str]
    total_points: t.Optional[int] = 0
    weekly_points: t.Optional[int] = 0


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
    points: int


class Activity(ActivityBase):
    id: int

    class Config:
        orm_mode = True


class ActivityCreate(ActivityBase):

    class Config:
        orm_mode = True


class ActivityOut(ActivityBase):
    pass


class ChallengeBase(BaseModel):
    name: str
    description: str
    points: int
    activity_id: str


class Challenge(ChallengeBase):
    id: int

    class Config:
        orm_mode = True


class ChallengeCreate(ChallengeBase):

    class Config:
        orm_mode = True


class ChallengeOut(ChallengeBase):
    pass


class performsActivitiesBase(BaseModel):
    activities_id: int
    user_id: int
    date: t.Optional[str]
    effort: t.Optional[int]


class performsActivities(performsActivitiesBase):
    id: int

    class Config:
        orm_mode = True


class performsActivitiesCreate(performsActivitiesBase):

    class Config:
        orm_mode = True


class performsActivitiesOut(performsActivitiesBase):
    pass


class performsChallengeBase(BaseModel):
    challenge_id: int
    performsActivity_id: int


class performsChallenge(performsChallengeBase):
    id: int

    class Config:
        orm_mode = True


class performsChallengeCreate(performsChallengeBase):

    class Config:
        orm_mode = True


class performsChallengeOut(performsChallengeBase):
    pass
