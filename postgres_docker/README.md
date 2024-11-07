# Docker Postgres Setup Guide

## Build the Docker Image

Navigate to the directory where your Dockerfile is located and build the Docker image:

```bash
docker build -t my-postgres-image .
```

### Run the Docker Container

Once the image is built, run the container:

```bash
docker run -d --name my-postgres-container -p 5432:5432 my-postgres-image
```

### Check the Container Logs (Optional)

You can check the logs to make sure postgres is running and that init.sql executed correctly:

```bash
docker logs my-postgres-container
```

### Connect to postgres from Inside the Container

You can access postgres inside the running container by executing the following command:

```bash
docker exec -it my-postgres-container psql -U postgres -d sample_db
> SELECT * FROM ORDERS;
```

### Stop and Remove the Existing Container:

```bash
docker stop my-postgres-container
docker rm my-postgres-container
```
