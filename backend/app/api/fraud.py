from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.ai import ScamScanRequest, ScamScanResponse
from app.services.fraud_service import FraudService

router = APIRouter()
service = FraudService()

@router.post('/scan', response_model=ScamScanResponse)
def scan(request: ScamScanRequest, db: Session = Depends(get_db)):
    if not request.content:
        raise HTTPException(status_code=400, detail='Content is required for fraud detection')
    result = service.evaluate_content(request.content)
    return result
