import pickle

with open('../data/cosine_similarity_model.pkl', 'rb') as f:
    model = pickle.load(f)

print("Cosine Similarity Matrix (sample):")
print(model.head())

def likeMovie():
    return int(len(model) / 2)

def topSimilarToCurrMovie(index):
    scores = model[model.columns[index]]
    sorted_scores = scores.sort_values(ascending=False)
    return sorted_scores.index.values[1:4]

index = likeMovie()
print(f"Current movie: {model.columns[index]}")

print(topSimilarToCurrMovie(index))