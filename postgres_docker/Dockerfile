# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables for PostgreSQL configuration
ENV POSTGRES_DB="sample_db"
ENV POSTGRES_USER="postgres"
ENV POSTGRES_PASSWORD="password"

# Expose the default PostgreSQL port
EXPOSE 5432

# Initialize the database with an SQL file
COPY ./init.sql /docker-entrypoint-initdb.d/
