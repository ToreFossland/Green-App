from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.db.session import get_db
from app.db.crud import (
    add_performsChallenge,
    get_performsChallenge,
    delete_performsChallenge
)
from app.db.schemas import (performsChallengeCreate, performsChallenge)
from app.core.auth import get_current_active_user, get_current_active_superuser

performsChallenge_router = r = APIRouter()


@r.post("/performsChallenge", response_model=performsChallenge, response_model_exclude_none=True)
async def user_create(
    request: Request,
    performsChallenge: performsChallengeCreate,
    db=Depends(get_db),
):
    """
    Create a new challenge
    """
    return add_performsChallenge(db, performsChallenge)


@r.get(
    "/performsChallenge",
    response_model=t.Any,
    # t.List[performsActivities],
    response_model_exclude_none=True,
)
async def performsChallenge_list(
    response: Response,
    db=Depends(get_db),
):
    """
    Get all performed challenges
    """
    performsChallenge = get_performsChallenge(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(performsChallenge)}"
    return performsChallenge


@r.delete(
    "/performsChallenge/{performsChallenge_id}", response_model=t.List[performsChallenge], response_model_exclude_none=True
)
async def performsChallenge_delete(
    request: Request,
    performsChallenge_id: int,
    db=Depends(get_db),
):
    """
    Delete existing challenge
    """
    return delete_performsChallenge(db, performsChallenge_id)
