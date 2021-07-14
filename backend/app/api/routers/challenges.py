""" from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.db.session import get_db
from app.db.crud import (
    seed_challenges
)
from app.db.schemas import Challenge
from app.core.auth import get_current_active_user, get_current_active_superuser

users_router = r = APIRouter()


@r.get(
    "/challenges",
    response_model=t.List[Challenge],
    response_model_exclude_none=True,
)
async def challenges_list(
    response: Response,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    users = get_users(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(users)}"
    return users
 """
