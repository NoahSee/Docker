# Use the official MySQL image from Docker Hub
FROM mysql:latest

# Set environment variables for MySQL configuration
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes
ENV MYSQL_DATABASE="sample_db"

# Expose the default MySQL port
EXPOSE 3306

# Initialize the database with an SQL file
COPY ./init.sql /docker-entrypoint-initdb.d/