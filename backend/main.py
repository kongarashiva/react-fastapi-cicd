from fastapi import FastAPI
 
app = FastAPI()
 
@app.get("/")
def home():
    return {"message": "Welcome to FastAPI Backend"}
 
@app.get("/health")
def health():
    return {"status": "UP"}
