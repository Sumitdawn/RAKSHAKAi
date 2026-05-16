from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.ai import AIChatRequest, AIChatResponse
from app.services.ai_service import AIService

router = APIRouter()
service = AIService()

@router.post('/chat', response_model=AIChatResponse)
def chat(request: AIChatRequest, db: Session = Depends(get_db)):
    if not request.message:
        raise HTTPException(status_code=400, detail='Message is required')
    response = service.compose_reply(request.message, request.language)
    return response
