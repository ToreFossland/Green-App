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
    


if __name__ == "__main__":
    print("Creating superuser admin@green-app.com")
    print("Seeding activities")
    #print("Seeding challenges")
    init()
    print("Superuser created and activities seeded")
