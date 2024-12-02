print("Starting the script...")

import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import pickle

print("Libraries imported successfully...")

try:
    movies_df = pd.read_csv("data/movies.csv")
    print("Movies dataset loaded successfully.")
except Exception as e:
    print(f"Error loading dataset: {e}")
    exit()

genre_columns = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy', 'Crime', 
                    'Documentary', 'Drama', 'Fantasy', 'Film-Noir', 'Horror', 'Musical', 
                    'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western']

missing_columns = [col for col in genre_columns if col not in movies_df.columns]
if missing_columns:
    print(f"Missing columns: {missing_columns}")
    exit()

genre_matrix = movies_df[genre_columns]

cosine_sim = cosine_similarity(genre_matrix)

cosine_sim_df = pd.DataFrame(cosine_sim, index=movies_df['title'], columns=movies_df['title'])

print("Cosine Similarity Model:")
print(cosine_sim_df.head())

pickle_filename = 'data/cosine_similarity_model.pkl'
with open(pickle_filename, 'wb') as f:
    pickle.dump(cosine_sim_df, f)

print(f"Cosine Similarity Model saved to {pickle_filename}")