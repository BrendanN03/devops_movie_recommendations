import pickle
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

with open('./data/cosine_similarity_model.pkl', 'rb') as f:
    model = pickle.load(f)

app = FastAPI()
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# print("Cosine Similarity Matrix (sample):")
# print(model.head())

@app.get("/ping")
def ping():
    """
    Check if the API is running.
    """
    return {"message": "pong"}

@app.get("/getLikedMovie")
def getLikedMovie():
    index = likeMovie()
    # print(f"Current movie: {model.columns[index]}")
    return {"message": f"Current movie: {model.columns[index]}"}

@app.get("/getTopSimilarToCurrMovie")
def getTopSimilarToCurrMovie():
    index = likeMovie()
    return {"message": f"{topSimilarToCurrMovie(index)}"}

def likeMovie():
    return int(len(model) / 2)

def topSimilarToCurrMovie(index):
    scores = model[model.columns[index]]
    sorted_scores = scores.sort_values(ascending=False)
    return sorted_scores.index.values[1:4]

# index = likeMovie()
# print(f"Current movie: {model.columns[index]}")

# print(topSimilarToCurrMovie(index))