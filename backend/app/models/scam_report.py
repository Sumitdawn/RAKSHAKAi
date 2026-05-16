from sqlalchemy import Column, Integer, String, Text, DateTime, Float
from datetime import datetime
from app.db.base import Base

class ScamReport(Base):
    __tablename__ = 'scam_reports'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=False)
    source_text = Column(Text, nullable=False)
    scan_result = Column(String(100), nullable=False)
    fraud_probability = Column(Float, nullable=False, default=0.0)
    detected_entities = Column(String(512), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
