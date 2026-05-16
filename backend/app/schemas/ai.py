from pydantic import BaseModel
from typing import List

class AIChatRequest(BaseModel):
    user_id: int
    message: str
    language: str | None = None

class AIChatResponse(BaseModel):
    reply: str
    urgency: str
    emotion_score: float
    confidence: float
    follow_up: List[str] = []

class ScamScanRequest(BaseModel):
    user_id: int
    content: str
    content_type: str = 'message'

class ScamScanResponse(BaseModel):
    verdict: str
    fraud_probability: float
    confidence: float
    advice: str
