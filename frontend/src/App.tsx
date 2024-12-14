import { useEffect, useState } from "react";
import Button from "./components/Button";
import { getLikedMovie, getMovieRec } from "./lib/api";

function App() {
  const [movieArr, setMovieArr] = useState<String[]>([]);
  const [movieRec, setMovieRec] = useState("");
  const addItem = async () => {
    try {
      const { message } = await getLikedMovie();
      setMovieArr([...movieArr, message]);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  const getRec = async() => {
    try {
      const { message } = await getMovieRec();
      setMovieRec(message);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    const lastCardObserver = new IntersectionObserver((entries) => {
      const lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
      loadNewCards();
      lastCardObserver.unobserve(lastCard.target);
      lastCardObserver.observe(document.querySelector(".card:last-child")!);
    }, {});

    lastCardObserver.observe(document.querySelector(".card:last-child")!);

    cards.forEach((card) => {
      observer.observe(card);
    });

    const cardContainer = document.querySelector(".card-container")!;



    function loadNewCards() {
      for (let i = 0; i < 10; i++) {
        const card = document.createElement("button");
        card.classList.add("card");
        card.onclick = addItem;

        const heading = document.createElement("h1");
        heading.innerHTML = "Movie Name";

        const description = document.createElement("p");
        description.innerHTML = "Movie Description";

        card.appendChild(heading);
        card.appendChild(description);
        observer.observe(card);
        cardContainer.append(card);
      }
    }
  }, []);



  return (
    <>
      <div className="text-center font-bold text-2xl">
        DevOps Movie Recommendations Project
      </div>
      <Button />
      <div className=" bg-blue-200">
        <h1>Liked Movies:</h1>
        <div className="flex">
          {movieArr.map((movie, index) => {
            return <div className="mr-2" key={index}>{movie}</div>;
          })}
        </div>
      </div>

      <div>Movie Rec:</div>
      <div onClick={() => getRec()}>Click me to get a random movie</div>
      <p>{movieRec}</p>


      <div className="card-container p-4">
        <button className="card" onClick={addItem}>
          <h1>Movie Name</h1>
          <p>Movie Description</p>
        </button>
      </div>
    </>
  );
}

export default App;
