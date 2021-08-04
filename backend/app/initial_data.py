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
            first_name="admin",
            last_name="user",
            is_active=True,
            is_superuser=True,
        ),
    )

    activitylist = {
        "Bike to work": 10,
        "Eat a vegetarian meal": 10,
        "Pick up trash": 10,
        "Donate old clothes": 10,
        "Carpool to location": 10,
        "Plant a tree": 10,
        "Limit food waste": 10,
        "Use public transport": 10
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
        "Bike to work and eat a vegetarian meal": ["Join many others in getting healthier and saving the environment by biking to work and eating a vegetarian meal this week!", 50, "2,1"],
        "Pick up trash and donate some old clothes you don't need": ["Donate some old clothes that you no longer need or want to a local shop and help clean the environment.", 50, "4,3"],
        "Bike to work, pick up trash and eat a vegetarian meal": ["Three activities is even better than two, and you will be rewarded accordingly!", 100, "3,2,1"],
        "Donate clothing, bike to work, eat a vegetarian meal and pick up trash": ["The perfect week, are you able to go all out and get everything", 200, "4,3,2,1"],
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
    print("Seeding challenges")
    init()
    print("Superuser created, activities and challenges seeded")
