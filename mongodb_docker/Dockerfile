# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Set the default database to create (optional)
ENV MONGO_INITDB_DATABASE=mydatabase

# Optionally, add a custom script to initialize the database
COPY ./init.js /docker-entrypoint-initdb.d/

# Expose the MongoDB port
EXPOSE 27017

# Use the default MongoDB entrypoint
CMD ["mongod"]
