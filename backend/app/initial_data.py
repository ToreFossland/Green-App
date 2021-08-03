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
        "Bike to work 7 times": ["Join many others in getting healthier and saving the environment by biking to work!", 200, "1,1,1,1,1,1,1"],
        "Complete listed activities": ["Complete these 4 challenges to win points. ", 80, "4,3,2,1"],
        "Eat vegetarian 3 times": ["Drop the meat, the environment will thank you!", 60, "2,2,2"],
        "Donate clothing 3 times": ["Donate some old clothes that you no longer need or want to a local shop and help clean the environment.", 60, "3,3,3"],
    }

    for key in challengeslist:
        try:
            seed_challenges(
                db,
                ChallengeCreate(
                    name=key,
                    description=challengeslist[key][0],
                    points=challengeslist[key][1],
                    activity_id=challengeslist[key][2]
                ))
        except ValidationError as e:
            print(e.json())


if __name__ == "__main__":
    print("Creating superuser admin@green-app.com")
    print("Seeding activities")
    #print("Seeding challenges")
    init()
    print("Superuser created and activities seeded")
