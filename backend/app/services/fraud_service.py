from app.schemas.ai import ScamScanResponse

class FraudService:
    @staticmethod
    def evaluate_content(content: str) -> ScamScanResponse:
        score = 0.2
        if any(token in content.lower() for token in ['urgent', 'verify', 'password', 'upi', 'account']):
            score = 0.91
        verdict = 'High risk' if score >= 0.75 else 'Suspicious'
        advice = 'This message contains scam-like language. Confirm the sender and avoid sharing sensitive information.'
        if score < 0.75:
            advice = 'The text has suspicious elements, but further verification is required.'
        return ScamScanResponse(verdict=verdict, fraud_probability=score, confidence=0.95, advice=advice)
