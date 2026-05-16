from fastapi import APIRouter

router = APIRouter()

@router.get('/status')
def emergency_status():
    return {
        'mode': 'active',
        'current_priority': 'medical',
        'message': 'Emergency triage is active. High-priority cases should be routed to support teams immediately.',
    }
