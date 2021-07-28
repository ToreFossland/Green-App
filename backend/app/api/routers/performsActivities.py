from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.db.session import get_db
from app.db.crud import (
    add_performsActivity,
    get_performsActivities,
    delete_performsActivity
)
from app.db.schemas import (performsActivitiesCreate, performsActivities)
from app.core.auth import get_current_active_user, get_current_active_superuser

performsActivities_router = r = APIRouter()


@r.post("/performsActivities", response_model=performsActivities, response_model_exclude_none=True)
async def user_create(
    request: Request,
    performsActivities: performsActivitiesCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Create a new challenge
    """
    return add_performsActivity(db, performsActivities)


@r.get(
    "/performsActivities",
    response_model=t.Any,
    # t.List[performsActivities],
    response_model_exclude_none=True,
)
async def performsActivities_list(
    response: Response,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get all performed activities
    """
    performsActivities = get_performsActivities(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(performsActivities)}"
    return performsActivities

@r.delete(
    "/performsActivities/{performsActivity_id}", response_model=performsActivities, response_model_exclude_none=True
)
async def performsActivity_delete(
    request: Request,
    performsActivity_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Delete existing user
    """
    return delete_performsActivity(db, performsActivity_id)
