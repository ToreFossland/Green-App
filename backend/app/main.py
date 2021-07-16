from fastapi import FastAPI, Depends
from starlette.requests import Request
import uvicorn

from app.api.routers.users import users_router
from app.api.routers.auth import auth_router
from app.api.routers.activities import activities_router
from app.api.routers.performsActivities import performsActivities_router
from app.api.routers.challenges import challenges_router
from app.core import config
from app.db.session import SessionLocal
from app.core.auth import get_current_active_user


app = FastAPI(
    title=config.PROJECT_NAME, docs_url="/api/docs", openapi_url="/api"
)


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response


@app.get("/api")
async def root():
    return {"message": "Hello World"}


# Routers
app.include_router(
    users_router,
    prefix="/api",
    tags=["users"],
    dependencies=[Depends(get_current_active_user)],
)
app.include_router(auth_router, prefix="/api", tags=["auth"]),
app.include_router(activities_router, prefix="/api", tags=["activities"]),
app.include_router(challenges_router, prefix="/api", tags=["challenges"]),
app.include_router(performsActivities_router, prefix="/api",
                   tags=["performsActivities"])


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8888)
