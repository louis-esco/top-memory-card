import "../styles/card.css";

export default function Card({ pokeName, pokeId, spriteUrl, handleClick }) {
  return (
    <>
      <button className="poke-card-btn" id={pokeId} onClick={handleClick}>
        <div className="poke-img">
          <img src={spriteUrl} alt={`Sprite of ${pokeName}`} />
        </div>
        <div className="poke-name">
          {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
        </div>
      </button>
    </>
  );
}
