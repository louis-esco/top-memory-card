import { useEffect } from "react";
import "../styles/card.css";

export default function Card({
  pokeName,
  pokeId,
  spriteUrl,
  handleClick,
  flipCard,
}) {
  return (
    <>
      <div className={flipCard ? "poke-card flip" : "poke-card"}>
        <button className="card-front" id={pokeId} onClick={handleClick}>
          <div className="poke-img">
            <img src={spriteUrl} alt={`Sprite of ${pokeName}`} />
          </div>
          <div className="poke-name">
            {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
          </div>
        </button>
        <div className="card-back">
          <img src="/src/assets/pokeball.png" alt="" />
        </div>
      </div>
    </>
  );
}
