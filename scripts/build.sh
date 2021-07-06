#!/bin/bash

# Build and run containers //Build after -d for hosting frontend separately 
docker-compose up -d #--build

# Hack to wait for postgres container to be up before running alembic migrations
sleep 10;

# Run migrations
docker-compose run --rm backend alembic upgrade head

# Create initial data
docker-compose run --rm backend python3 app/initial_data.py