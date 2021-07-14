from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey, Table
from sqlalchemy.sql.sqltypes import Date

from .session import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    first_name = Column(String)
    last_name = Column(String)
    company = Column(String)
    points = Column(Integer)
    hashed_password = Column(String, nullable=False)
    activities = relationship("Activity", back_populates="owner")
    challenges = relationship("Challenge", back_populates="owner")


class Activity(Base):
    __tablename__ = "activity"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    points = Column(Integer)
    date = Column(Date)
    owner = relationship("User", back_populates="activities")
    challenges = relationship("challenge", back_populates="activities")


class Challenge(Base):
    __tablename__ = "challenge"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    points = Column(Integer)
    users = relationship("user",
                         secondary=ParticipatesChallenge,
                         back_populates="challenges")
    activities = relationship("activity",
                              secondary=ContainsActivity,
                              back_populates="challenges")
