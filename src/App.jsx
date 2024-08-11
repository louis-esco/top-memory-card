import { useState, useEffect } from "react";
import "./App.css";
import Grid from "./components/Grid";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const pokeIndexes = [4, 7, 25, 39, 54, 79, 116, 133, 143, 151, 155, 183];
  const [pokeData, setPokeData] = useState([]);
  const [clickedPoke, setClickedPoke] = useState([]);

  function randomSort(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function handleClick(e) {
    if (clickedPoke.includes(e.currentTarget.id)) {
      setCurrentScore(0);
      setClickedPoke([]);
    } else {
      setClickedPoke([...clickedPoke, e.currentTarget.id]);
      setCurrentScore(currentScore + 1);
      if (maxScore <= currentScore) setMaxScore(currentScore + 1);
    }
    setPokeData(randomSort(pokeData));
  }

  window.poke = pokeData;

  useEffect(() => {
    const fetchPokeData = async () => {
      const pokeArr = [];
      for (const index of pokeIndexes) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${index}`
        );
        const data = await response.json();
        pokeArr.push({
          id: data.id,
          name: data.name,
          spriteUrl: data.sprites.other.dream_world.front_default,
        });
      }
      setPokeData(pokeArr);
    };
    fetchPokeData();
  }, []);

  return (
    <>
      <ScoreBoard currentScore={currentScore} maxScore={maxScore} />
      <Grid pokeData={pokeData} handleClick={handleClick} />
    </>
  );
}

export default App;
