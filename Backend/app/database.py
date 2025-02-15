from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from models.user import User

MONGO_URI = "mongodb+srv://yashshetty776:yash@yashu143.o89m6eb.mongodb.net/?retryWrites=true&w=majority&appName=yashu143"

async def init_db():
    client = AsyncIOMotorClient(MONGO_URI)
    database = client.get_database("Legal")  # Explicitly use the "main" database
    await init_beanie(database, document_models=[User])  # Register user model
