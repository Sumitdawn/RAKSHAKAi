from fastapi import APIRouter

router = APIRouter()

@router.get('/summary')
def analytics_summary():
    return {
        'activeTickets': 34,
        'fraudAlerts': 11,
        'urgentCases': 8,
        'aiConfidence': 0.97,
        'emotionHeatmap': [
            {'label': 'Calm', 'value': 24},
            {'label': 'Stressed', 'value': 12},
            {'label': 'Panic', 'value': 8},
        ],
    }
