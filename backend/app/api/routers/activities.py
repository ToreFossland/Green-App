from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.db.session import get_db
from app.db.crud import (
    get_activities,
    seed_activities
)
from app.db.schemas import Activity, ActivityCreate
from app.core.auth import get_current_active_user, get_current_active_superuser

activities_router = r = APIRouter()


@r.post("/activities", response_model=Activity, response_model_exclude_none=True)
async def user_create(
    request: Request,
    activity: ActivityCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Create a new activity
    """
    return seed_activities(db, activity)


@r.get(
    "/activities",
    response_model=t.List[Activity],
    response_model_exclude_none=True,
)
async def activities_list(
    response: Response,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get all Activities
    """
    activities = get_activities(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(activities)}"
    return activities
