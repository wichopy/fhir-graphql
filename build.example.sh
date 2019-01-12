#!/bin/sh
HOST=some-container-host
PROJECT_ID=some-project-id
IMAGE=some-image-name

docker build \
-t $HOST/$PROJECT_ID/$IMAGE:$(git rev-parse HEAD) \
-t $HOST/$PROJECT_ID/$IMAGE:latest \
.

