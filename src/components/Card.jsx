import "../styles/card.css";
import pokeball from "/src/assets/pokeball.png";

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
          <img src={pokeball} alt="" />
        </div>
      </div>
    </>
  );
}
