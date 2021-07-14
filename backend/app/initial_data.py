#!/usr/bin/env python3

from app.db.session import get_db
from app.db.crud import create_user, seed_activities, seed_challenges
from app.db.schemas import UserCreate, Activity, Challenge
from app.db.session import SessionLocal


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

    seed_activities(
        db,
        Activity(
            name="Play among us",
            points=100,
        ),
    )


if __name__ == "__main__":
    print("Creating superuser admin@green-app.com")
    print("Seeding activities")
    init()
    print("Superuser created and activities seeded")
