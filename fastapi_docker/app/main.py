from typing import List

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# FastAPI instance with metadata for OpenAPI
app = FastAPI(
    title="Task Management API",
    description="An API to manage tasks. You can create, read, update, and delete tasks.",
    version="1.0.0",
    contact={
        "name": "API Support",
        "url": "http://www.example.com/support",
        "email": "support@example.com",
    },
    license_info={
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT",
    },
)


# Define the Task model using Pydantic
class Task(BaseModel):
    title: str
    description: str
    done: bool = False


# Sample in-memory database to hold tasks (populated with some tasks)
tasks = [
    Task(title="Buy groceries", description="Milk, Bread, Eggs, Butter", done=False),
    Task(
        title="Finish homework",
        description="Math exercises and physics problems",
        done=True,
    ),
    Task(
        title="Clean the house",
        description="Vacuum the floor and clean the windows",
        done=False,
    ),
    Task(
        title="Write blog post",
        description="Write a new post for the tech blog",
        done=False,
    ),
    Task(title="Workout", description="30-minute run in the park", done=True),
]


# Root endpoint for the API with a summary and metadata
@app.get("/", summary="Root endpoint", tags=["Root"])
async def read_root():
    return {"message": "Welcome to the Task Management API!"}


# Endpoint to create a new task
@app.post("/tasks/", response_model=Task, summary="Create a new task", tags=["Tasks"])
async def create_task(task: Task):
    tasks.append(task)
    return task


# Endpoint to get a list of all tasks
@app.get("/tasks/", response_model=List[Task], summary="Get all tasks", tags=["Tasks"])
async def get_tasks():
    return tasks


# Endpoint to get a task by its ID
@app.get(
    "/tasks/{task_id}", response_model=Task, summary="Get a task by ID", tags=["Tasks"]
)
async def get_task(task_id: int):
    if task_id < 0 or task_id >= len(tasks):
        raise HTTPException(status_code=404, detail="Task not found")
    return tasks[task_id]


# Endpoint to update an existing task by its ID
@app.put(
    "/tasks/{task_id}", response_model=Task, summary="Update a task", tags=["Tasks"]
)
async def update_task(task_id: int, task: Task):
    if task_id < 0 or task_id >= len(tasks):
        raise HTTPException(status_code=404, detail="Task not found")
    tasks[task_id] = task
    return task


# Endpoint to delete a task by its ID
@app.delete(
    "/tasks/{task_id}", response_model=Task, summary="Delete a task", tags=["Tasks"]
)
async def delete_task(task_id: int):
    if task_id < 0 or task_id >= len(tasks):
        raise HTTPException(status_code=404, detail="Task not found")
    deleted_task = tasks.pop(task_id)
    return deleted_task
