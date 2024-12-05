# DevOps Movie Recommendations

This project provides a movie recommendation system built using content-based filtering techniques, with a focus on DevOps best practices. The goal of the project is to recommend movies to users based on their preferences, using a combination of machine learning models, automated workflows, and continuous integration/continuous deployment (CI/CD) processes.

## Features

- **Content-Based Filtering**: The recommendation system uses movie genre data to compute the similarity between movies using cosine similarity.
- **CI/CD Pipeline**: Automatically deploys and updates the application whenever code changes are made, and the model retrains when new data is available.
- **Docker**: The application is containerized using Docker, and Docker Compose is used for orchestrating multiple services, including the model and the frontend.
  
## Architecture

The architecture is composed of the following components:

1. **Frontend**: A user-facing application where users can rate movies and get personalized recommendations.
2. **Backend**: A RESTful API that communicates with the movie recommendation model and retrieves user ratings from a database.
4. **CI/CD Pipeline**: Automated deployment and testing using GitHub Actions, ensuring continuous integration and delivery.

## Prerequisites

- Python 3.7 or higher
- Docker & Docker Compose
- GitHub repository for managing the codebase and CI/CD pipeline

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/devops_movie_recommendations.git
cd devops_movie_recommendations
```

### 2. Use docker to run frontend and backend

In root directory, run
```bash
docker-compose up
```
