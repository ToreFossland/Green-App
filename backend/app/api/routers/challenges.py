from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.db.session import get_db
from app.db.crud import (
    get_challenges,
    seed_challenges
)
from app.db.schemas import Challenge, ChallengeCreate
from app.core.auth import get_current_active_user, get_current_active_superuser

challenges_router = r = APIRouter()


@r.post("/challenges", response_model=Challenge, response_model_exclude_none=True)
async def user_create(
    request: Request,
    challenge: ChallengeCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    """
    Create a new challenge
    """
    return seed_challenges(db, challenge)


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
    """
    Get all Challenges
    """
    challenges = get_challenges(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(challenges)}"
    return challenges
