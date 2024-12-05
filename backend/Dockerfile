FROM python:3.12

WORKDIR /app

RUN pip install poetry==1.8.3

COPY poetry.lock pyproject.toml ./

RUN poetry install

COPY . .

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--reload"]
