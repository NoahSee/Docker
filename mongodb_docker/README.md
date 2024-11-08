# Docker Postgres Setup Guide

## Build the Docker Image

Navigate to the directory where your Dockerfile is located and build the Docker image:

```bash
docker build -t my-mongodb-image .
```

### Run the Docker Container

Once the image is built, run the container:

```bash
docker run -d --name my-mongodb-container -p 27017:27017 my-mongodb-image
```

### Check the Container Logs (Optional)

You can check the logs to make sure postgres is running and that init.sql executed correctly:

```bash
docker logs my-mongodb-container
```

### Connect to postgres from Inside the Container

You can access postgres inside the running container by executing the following command:

```bash
docker exec -it my-mongodb-container mongosh


use sample_db
> db.customers.find()
```

### Stop and Remove the Existing Container:

```bash
docker stop my-mongodb-container
docker rm my-mongodb-container
```
