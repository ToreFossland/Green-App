#!/usr/bin/env python3

from app.db.session import get_db
from app.db.crud import create_user, seed_activities, seed_challenges
from app.db.schemas import UserCreate, ActivityCreate, ChallengeCreate
from app.db.session import SessionLocal

from pydantic import ValidationError


def init() -> None:
    db = SessionLocal()

    create_user(
        db,
        UserCreate(
            email="admin@green-app.com",
            password="password",
            is_active=True,
            is_superuser=True,
        ),
    )

    activitylist = {
        "Bike to work": 10,
        "Eat a vegetarian meal": 10,
        "Pick up trash": 10,
        "Donate old clothes": 10,
    }

    for key in activitylist:
        try:
            seed_activities(
                db,
                ActivityCreate(
                    name=key,
                    points=activitylist[key],
                ),
            )
        except ValidationError as e:
            print(e.json())

    challengeslist = {
        "Bike to work for a week": ["Join many others in getting healthier and saving the environment by biking to work!", 60],
        "Eat a vegetarian during weekdays": ["Drop the meat on weekdays, the environment will thank you!", 40],
        "Donate 10 pieces of clothing": ["Donate some old clothes that you no longer need or want to a local shop.", 40],
    }

    for key in challengeslist:
        try:
            seed_challenges(
                db,
                ChallengeCreate(
                    name=key,
                    description=challengeslist[key][0],
                    points=challengeslist[key][1]),
            )
        except ValidationError as e:
            print(e.json())


if __name__ == "__main__":
    print("Creating superuser admin@green-app.com")
    print("Seeding activities")
    #print("Seeding challenges")
    init()
    print("Superuser created and activities seeded")
