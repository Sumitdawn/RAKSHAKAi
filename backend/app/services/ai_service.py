import os
from typing import List
from openai import OpenAI
from app.schemas.ai import AIChatResponse, ScamScanResponse

class AIService:
    def __init__(self):
        self.client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

    def analyze_emotion(self, text: str) -> dict:
        # Simplified emotion detection stub. Replace with fine-tuned model or external service.
        score = 0.7
        if any(word in text.lower() for word in ['panic', 'urgent', 'help', 'danger']):
            score = 0.92
        urgency = 'high' if score > 0.8 else 'medium'
        return {'emotion_score': score, 'urgency': urgency, 'confidence': 0.94}

    def compose_reply(self, message: str, language: str | None = None) -> AIChatResponse:
        sentiment = self.analyze_emotion(message)
        suggestion = 'Please share more details about the support needed.'
        return AIChatResponse(
            reply=f'Your concern has been identified as {sentiment["urgency"]} priority. Rakshak AI is preparing immediate guidance.',
            urgency=sentiment['urgency'],
            emotion_score=sentiment['emotion_score'],
            confidence=sentiment['confidence'],
            follow_up=[suggestion],
        )

    def scan_fraud(self, content: str, content_type: str = 'message') -> ScamScanResponse:
        lower = content.lower()
        if 'upi' in lower or 'pay' in lower or 'bank' in lower:
            verdict = 'High risk'
            probability = 0.88
            advice = 'Do not share personal banking details; verify sender identity through official channels.'
        else:
            verdict = 'Review recommended'
            probability = 0.42
            advice = 'The content appears suspicious. Confirm with welfare authorities before responding.'
        return ScamScanResponse(verdict=verdict, fraud_probability=probability, confidence=0.97, advice=advice)
