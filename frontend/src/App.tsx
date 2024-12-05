import { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
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
        const card = document.createElement("div");
        card.classList.add("card");

        const heading = document.createElement("h1");
        heading.innerHTML = "Movie Name";

				const description = document.createElement("p");
				description.innerHTML = "Movie Description";


        card.appendChild(heading);
				card.appendChild(description)
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
			
      <div className="card-container">
        <div className="card">
          <h1>Movie Name</h1>
					<p>Movie Description</p>
        </div>
      </div>
    </>
  );
}

export default App;
