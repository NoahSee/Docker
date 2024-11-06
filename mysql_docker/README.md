# Docker MySQL Setup Guide

## Build the Docker Image

Navigate to the directory where your Dockerfile is located and build the Docker image:

```bash
docker build -t my-mysql-image .
```

### Run the Docker Container

Once the image is built, run the container:

```bash
docker run -d --name my-mysql-container -p 3306:3306 my-mysql-image
```

### Check the Container Logs (Optional)

You can check the logs to make sure MySQL is running and that init.sql executed correctly:

```bash
docker logs my-mysql-container
```

### Connect to MySQL from Inside the Container

You can access MySQL inside the running container by executing the following command:

```bash
docker exec -it my-mysql-container mysql -u root
```

If you want to connect from your local machine (assuming you have MySQL installed), use the following command:

```bash
mysql -h 127.0.0.1 -P 3306 -u root
```

### Stop and Remove the Existing Container:

```bash
docker stop my-mysql-container
docker rm my-mysql-container
```
