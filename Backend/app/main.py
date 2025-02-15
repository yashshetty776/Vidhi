from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router
from routes.users import router as users_router
from routes.home import router as home_router
from routes.cases import router as cases_router

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, tags=["Authentication"])
app.include_router(users_router, prefix="/users", tags=["User Management"])
app.include_router(cases_router, prefix="/cases", tags=["Case Management"])
app.include_router(home_router, tags=["Home Page"])




@app.get("/")
def read_root():
    return {"message": "Welcome to the Legal Aid Platform"}
