
from app.core.security import get_password_hash
from . import models, schemas
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t


from pydantic import ValidationError


def get_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_user_by_email(db: Session, email: str) -> schemas.UserBase:
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.UserOut]:
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        is_active=user.is_active,
        is_superuser=user.is_superuser,
        hashed_password=hashed_password,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    user = get_user(db, user_id)
    if not user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    db.delete(user)
    db.commit()
    return user


def edit_user(
    db: Session, user_id: int, user: schemas.UserEdit
) -> schemas.User:
    db_user = get_user(db, user_id)
    if not db_user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    update_data = user.dict(exclude_unset=True)

    if "password" in update_data:
        update_data["hashed_password"] = get_password_hash(user.password)
        del update_data["password"]

    for key, value in update_data.items():
        setattr(db_user, key, value)

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def seed_activities(db: Session, activity: schemas.ActivityCreate):
    db_activity = models.Activity(
        name=activity.name,
        points=activity.points
    )

    db.add(db_activity)
    db.commit()
    db.refresh(db_activity)

    return db_activity


def get_activities(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.ActivityOut]:
    return db.query(models.Activity).offset(skip).limit(limit).all()


def seed_challenges(db: Session, challenge: schemas.Challenge):

    db_challenge = models.Challenge(
        name=challenge.name,
        description=challenge.description,
        points=challenge.points
    )
    db.add(db_challenge)
    db.commit()
    db.refresh(db_challenge)
    return db_challenge


def get_challenges(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.ChallengeOut]:
    return db.query(models.Challenge).offset(skip).limit(limit).all()


def get_performsActivity(db: Session, performsActivity_id: int):
    print(performsActivity_id)
    performsActivity = db.query(models.performsActivities).filter(
        models.performsActivities.id == performsActivity_id).first()
    if not performsActivity:
        raise HTTPException(
            status_code=404, detail="PerformsActivity not found")
    return performsActivity


def add_performsActivity(db: Session, performsActivities: schemas.performsActivities):

    db_performsActivities = models.performsActivities(
        user_id=performsActivities.user_id,
        activities_id=performsActivities.activities_id,
        date=performsActivities.date,
        effort=performsActivities.effort
    )
    db.add(db_performsActivities)
    db.commit()
    db.refresh(db_performsActivities)
    return db_performsActivities


# .filter(models.User.id == 1)

def get_performsActivities(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.performsActivitiesOut]:
    try:
        return db.query(models.User, models.performsActivities, models.Activity).filter(
            models.User.id == models.performsActivities.user_id
        ).filter(
            models.Activity.id == models.performsActivities.activities_id
        ).all()
    except ValidationError as e:
        print(e.json())

    # return db.query(models.User, models.Activity, models.performsActivities).join(
    #     models.performsActivities, models.User.id == models.performsActivities.user_id).join(models.Activity, models.Activity.id == models.performsActivities.activities_id)

    """ join(
        performsActivities, user.id == performsActivities.user_id).join(activities, performsActivities.activity_id == activities.id)
 """


def delete_performsActivity(db: Session, performsActivity_id: int):
    performsActivity = get_performsActivity(db, performsActivity_id)
    if not performsActivity:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    db.delete(performsActivity)
    db.commit()
    return performsActivity
