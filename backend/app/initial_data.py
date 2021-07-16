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
    try:
        seed_activities(
            db,
            ActivityCreate(
                name="Play among us",
                points=100,
            ),
        )
    except ValidationError as e:
        print(e.json())


if __name__ == "__main__":
    print("Creating superuser admin@green-app.com")
    print("Seeding activities")
    print("Seeding challenges")
    init()
    print("Superuser created and activities seeded")
