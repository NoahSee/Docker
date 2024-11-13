# FastAPI Setup Guide

## Build the Docker Image

Navigate to the directory where your Dockerfile is located and build the Docker image:

```bash
docker build -t fastapi-app .
```

Navigate to the directory where your Dockerfile is located and build the Docker image:

```bash
docker build -t fastapi-app .
docker run -d -p 8000:8000 fastapi-app
```

### Accessing the API and Documentation

```bash
http://localhost:8000/
http://localhost:8000/openapi.json
```
