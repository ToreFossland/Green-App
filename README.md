# green-app

## Features

- **[FastAPI](https://fastapi.tiangolo.com/)** (Python 3.8)
  - JWT authentication using [OAuth2 "password
    flow"](https://fastapi.tiangolo.com/tutorial/security/simple-oauth2/) and
    PyJWT
- **[React](https://reactjs.org/)** (with Typescript)
  - [react-router v5](https://reacttraining.com/react-router/) to handle routing
  - [Utility functions](#Frontend-Utilities) and [higher-order
    components](#Higher-Order-Components) for handling authentication
  - [Context API](https://reactjs.org/docs/context.html) for global state management
- **[PostgreSQL](https://www.postgresql.org/)** for the database
- **[SqlAlchemy](https://www.sqlalchemy.org/)** for ORM
- **[Alembic](https://alembic.sqlalchemy.org/en/latest/)** for database
  migrations
- **[Pytest](https://docs.pytest.org/en/latest/)** for backend tests
  - Includes test database, transaction rollbacks after each test, and reusable
    [Pytest fixtures](#fixtures).
- **[Prettier](https://prettier.io/)**/**[ESLint](https://eslint.org/)** (Airbnb
  style guide)
- **[Docker Compose](https://docs.docker.com/compose/)** for development
- **[Nginx](https://www.nginx.com/)** as a reverse proxy to allow
  backend/frontend on the same port
- **[MaterialUI](https://material-ui.com/)** using
  [styled-components](https://styled-components.com/) for styling.
- **[react-admin](https://github.com/marmelab/react-admin)** for the admin
  dashboard
  - Using the same token based authentication as FastAPI backend (JWT)


## Table of Contents

- [Background](#background)
- [Quick Start](#quick-start)
- [Admin Dashboard](#admin-dashboard)
- [Migrations](#migrations)
- [Logging](#logging)
- [Project Layout](#project-layout)


## Background

GreenApp's goal is to promote a more sustainable lifestyle through friendly competition with yourself and others.

### Quick Start

First, install docker-compose if you don't already have it:

[docker-compose installation official
docs](https://docs.docker.com/compose/install/).

Then change into your project directory and run:

```bash
chmod +x scripts/build.sh
./scripts/build.sh
```

This will build and run the docker containers, run the alembic migrations, and load the initial data (a user, activities and challenges).

Credentials for the user |
email: admin@green-app.com
password: password

It may take a while to build the first time it's run since it needs to fetch all the docker images.

Once you've built the images once, you can simply use regular `docker-compose`
commands to manage your development environment, for example to start your
containers:

```bash
docker-compose up -d
```

Once this finishes you can navigate to the port `localhost:8000`, and you should see our application:

_Note: If you see an Nginx error at first with a `502: Bad Gateway` page, you may have to wait for webpack to build the development server (the nginx container builds much more quickly)._

The backend docs will be at `http://localhost:8000/api/docs`.


### Rebuilding containers:

```
docker-compose build
```

### Restarting containers:

```
docker-compose restart
```

### Bringing containers down:

```
docker-compose down
```

## Admin Dashboard

This project uses [react-admin](https://marmelab.com/react-admin/) for a admin dashboard displaying all users.

After starting the project, navigate to `http://localhost:8000/admin`. You
should see a login screen. Use the username/password for the default user mentioned above.

## Migrations

Migrations are run using alembic. To run all migrations:

```
docker-compose run --rm backend alembic upgrade head
```

To create a new migration:

```
alembic revision -m "create users table"
```

And fill in `upgrade` and `downgrade` methods. For more information see
[Alembic's official documentation](https://alembic.sqlalchemy.org/en/latest/tutorial.html#create-a-migration-script).

## Logging

```
docker-compose logs
```

Or for a specific service:

```
docker-compose logs -f name_of_service # frontend|backend|db
```

## Project Layout

```
backend
└── app
    ├── alembic
    │   └── versions # where migrations are located
    ├── api
    │   └── routers # contains all the endpoints for each table in the database.
    ├── core    # config
    ├── db      # db models, schemas and crud
    ├── tests   # pytest
    └── main.py # entrypoint to backend

frontend
└── public
└── src
    ├── admin # for admin dashboard
    │ 
    ├── components # components that are not pages
    │   └── ActivityChart.tsx
    ├── config
    │   └── index.tsx   # constants
    ├── forms # form components
    │ 
    ├── interfaces # component interfaces
    │ 
    ├── pages # page components
    │   └── HomePage.tsx
    ├── state # context state management
    │   └── activities
    │   │   └── activitiesActions.ts
    │   └── challenge
    │   └── performsActivities
    │  
    ├── __tests__ # frontend tests
    │   └── test_home.tsx
    ├── styledComponents # components styled with styled-components
    │   └── StAppBar.tsx
        ├── pages # page components
    │   └── HomePage.tsx
    ├── index.tsx   # entrypoint
    └── App.tsx     # handles routing
```
