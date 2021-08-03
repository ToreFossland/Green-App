
import datetime
from typing import List
from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey, Table
from sqlalchemy.sql.sqltypes import ARRAY

from .session import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=True)
    first_name = Column(String)
    last_name = Column(String)
    company = Column(String)
    points = Column(Integer, default=10)
    hashed_password = Column(String, nullable=False)
    activity = relationship("performsActivities",
                            uselist=False, backref="user")


class Activity(Base):
    __tablename__ = "activity"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    points = Column(Integer)
    user = relationship("performsActivities",
                        uselist=False, backref="activity")


class Challenge(Base):
    __tablename__ = "challenge"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    points = Column(Integer)
    activity_id = Column(String)
    performs = relationship("performsChallenge",
                            uselist=False, backref="challenge")


class performsActivities(Base):
    __tablename__ = "performsActivities"
    id = Column(Integer, primary_key=True, index=True)
    activities_id = Column(Integer, ForeignKey('activity.id'))
    user_id = Column(Integer, ForeignKey('user.id'))
    date = Column(String, default="15/07/2021")
    effort = Column(Integer, default=0)
    challenge = relationship("performsChallenge",
                             uselist=False, backref="performsActivities")


class performsChallenge(Base):
    __tablename__ = "performsChallenge"
    id = Column(Integer, primary_key=True, index=True)
    performsActivity_id = Column(
        Integer, ForeignKey('performsActivities.id'))
    challenge_id = Column(Integer, ForeignKey('challenge.id'))
