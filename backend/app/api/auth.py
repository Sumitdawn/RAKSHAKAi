from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import UserCreate, Token, UserRead
from app.services.auth_service import AuthService

router = APIRouter()

@router.post('/register', response_model=UserRead)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user_in.email).first()
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Email already registered')
    user = AuthService.create_user(db, user_in)
    return user

@router.post('/token', response_model=Token)
def login(form_data: UserCreate, db: Session = Depends(get_db)):
    user = AuthService.authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid credentials')
    token = AuthService.create_token(user)
    return {'access_token': token, 'token_type': 'bearer'}
