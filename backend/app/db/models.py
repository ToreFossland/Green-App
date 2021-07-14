from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey, Table
from sqlalchemy.sql.sqltypes import Date

from .session import Base

PerformsActivity = Table('performsActivity', Base.metadata,
                         Column('user_id', Integer, ForeignKey('user.id')),
                         Column('activity_id', Integer,
                                ForeignKey('activity.id')),
                         Column('date', Date)
                         )
""" FollowsUser = Table('followsUser', Base.metadata,
                    Column('user1_id', Integer,
                           ForeignKey('user.id')),
                    Column('user2_id', Integer,
                           ForeignKey('user.id'))
                    ) """
ParticipatesChallenge = Table('participatesChallenge', Base.metadata,
                              Column('user_id', Integer,
                                     ForeignKey('user.id')),
                              Column('challenge_id', Integer,
                                     ForeignKey('challenge.id'))
                              )
ContainsActivity = Table('containsActivity', Base.metadata,
                         Column('activity_id', Integer,
                                ForeignKey('activity.id')),
                         Column('challenge_id', Integer,
                                ForeignKey('activity.id'))
                         )


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
    activities = relationship("Activity",
                              secondary=PerformsActivity,
                              back_populates="users")
    challenges = relationship("challenge",
                              secondary=ParticipatesChallenge,
                              back_populates="users")
    """ follower = relationship("User",
                            secondary=FollowsUser,
                            back_populates="follower") """


class Activity(Base):
    __tablename__ = "activity"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    points = Column(Integer)
    users = relationship("User",
                         secondary=PerformsActivity,
                         back_populates="activities")

    challenges = relationship("challenge",
                              secondary=ContainsActivity,
                              back_populates="activities")


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
