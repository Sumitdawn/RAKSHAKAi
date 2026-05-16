import os
import httpx
import json

# Render API key (injected below)
RENDER_API_KEY = os.getenv('RENDER_API_KEY')
if not RENDER_API_KEY:
    print('RENDER_API_KEY not set; aborting')
    raise SystemExit(1)

headers = {
    'Authorization': f'Bearer {RENDER_API_KEY}',
    'Content-Type': 'application/json'
}

payload = {
    'name': 'rakshak-backend',
    'repo': {
        'provider': 'github',
        'name': 'Sumitdawn/RAKSHAKAi',
        'branch': 'main'
    },
    'type': 'web_service',
    'env': 'docker',
    'dockerfilePath': 'backend/Dockerfile',
    'startCommand': 'uvicorn app.main:app --host 0.0.0.0 --port 10000',
    'buildCommand': '',
    'autoDeploy': True
}

print('Creating Render service...')
try:
    with httpx.Client(timeout=60.0) as client:
        r = client.post('https://api.render.com/v1/services', headers=headers, json=payload)
        try:
            data = r.json()
        except Exception:
            data = {'status_code': r.status_code, 'text': r.text}
        print(json.dumps({'status_code': r.status_code, 'response': data}, indent=2))
except Exception as e:
    print('Request error:', str(e))
    raise
