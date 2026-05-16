from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    PROJECT_NAME: str = 'Rakshak AI'
    DATABASE_URL: str = os.getenv('DATABASE_URL', 'sqlite:///./test.db')
    JWT_SECRET: str = os.getenv('JWT_SECRET', 'change-this-secret')
    JWT_ALGORITHM: str = 'HS256'
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    OPENAI_API_KEY: str = os.getenv('OPENAI_API_KEY', '')
    CHROMA_DB_DIR: str = os.getenv('CHROMA_DB_DIR', '/data/chroma')

settings = Settings()
