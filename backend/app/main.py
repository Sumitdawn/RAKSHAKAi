from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, ai, fraud, analytics, emergency
from app.db.session import engine
from app.db.base import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title='Rakshak AI API',
    description='Secure backend for AI customer support, fraud detection and emergency response.',
    version='0.1.0',
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(auth.router, prefix='/api/auth', tags=['auth'])
app.include_router(ai.router, prefix='/api/ai', tags=['ai'])
app.include_router(fraud.router, prefix='/api/fraud', tags=['fraud'])
app.include_router(analytics.router, prefix='/api/analytics', tags=['analytics'])
app.include_router(emergency.router, prefix='/api/emergency', tags=['emergency'])

@app.get('/')
def root():
    return {'message': 'Rakshak AI backend is online.'}
