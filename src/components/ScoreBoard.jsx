import "../styles/scoreboard.css";

export default function ScoreBoard({ currentScore, maxScore }) {
  return (
    <header>
      <h1 className="header-title">Pokemon Memory Card</h1>
      <div className="scores">
        <div className="current-score">
          <div>Current score:</div> <div>{currentScore}</div>
        </div>
        <div className="max-score">
          <div>Best score:</div> <div>{maxScore}</div>
        </div>
      </div>
    </header>
  );
}
