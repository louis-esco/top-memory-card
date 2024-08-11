import Card from "./Card";
import "../styles/grid.css";

export default function Grid({ pokeData, handleClick }) {
  return (
    <div className="poke-grid">
      {pokeData.map((poke) => (
        <Card
          key={poke.id}
          pokeId={poke.id}
          pokeName={poke.name}
          spriteUrl={poke.spriteUrl}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
