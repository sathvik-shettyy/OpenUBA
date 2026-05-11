from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

DATABASE_URL = os.getenv("DATABASE_URL")

class Event(BaseModel):
    user_id: str
    event: str
    properties: dict = {}

@app.get("/")
def home():
    return {"status": "OpenUBA lightweight backend running"}

@app.post("/event")
def track(event: Event):
    return {"message": "event received", "data": event}