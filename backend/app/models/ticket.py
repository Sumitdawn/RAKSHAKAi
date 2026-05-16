from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from datetime import datetime
from app.db.base import Base

class Ticket(Base):
    __tablename__ = 'tickets'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=False)
    category = Column(String(100), nullable=False)
    urgency = Column(String(50), nullable=False)
    status = Column(String(50), default='open')
    summary = Column(String(512), nullable=False)
    details = Column(Text, nullable=True)
    flagged_fraud = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
