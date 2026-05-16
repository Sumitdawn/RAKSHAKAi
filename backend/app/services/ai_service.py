import os
from typing import Optional

try:
    from openai import OpenAI  # type: ignore
    _OPENAI_AVAILABLE = True
except Exception:
    _OPENAI_AVAILABLE = False

from app.schemas.ai import AIChatResponse, ScamScanResponse


class AIService:
    """AI service with a safe mock fallback when no API key or SDK is available.

    If `OPENAI_API_KEY` is present and the `openai` SDK is installed, the class will
    attempt to instantiate a real client. Otherwise it runs in mock mode and returns
    deterministic, privacy-safe replies so the app can function without external APIs.
    """

    def __init__(self):
        key = os.getenv('OPENAI_API_KEY')
        if key and _OPENAI_AVAILABLE:
            try:
                self.client = OpenAI(api_key=key)
                self.use_real = True
            except Exception:
                self.client = None
                self.use_real = False
        else:
            self.client = None
            self.use_real = False

    def analyze_emotion(self, text: str) -> dict:
        score = 0.7
        if any(word in text.lower() for word in ['panic', 'urgent', 'help', 'danger']):
            score = 0.92
        urgency = 'high' if score > 0.8 else 'medium'
        return {'emotion_score': score, 'urgency': urgency, 'confidence': 0.94}

    def compose_reply(self, message: str, language: Optional[str] = None) -> AIChatResponse:
        # If a real client is available we could call it here; keep a safe try/except
        # and fall back to the deterministic response so no API key is required.
        if self.use_real and self.client is not None:
            try:
                # Attempt a minimal API call; if it fails we'll use the mock below.
                # NOTE: keep this non-blocking and tolerant of API errors.
                resp = self.client.chat.completions.create(
                    model=os.getenv('OPENAI_MODEL', 'gpt-4o-mini'),
                    messages=[{"role": "user", "content": message}],
                    max_tokens=200,
                )
                text = resp.choices[0].message.get('content', '').strip()
                return AIChatResponse(reply=text or 'Sorry, I could not generate a response.', urgency='medium', emotion_score=0.5, confidence=0.8, follow_up=[])
            except Exception:
                pass

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
