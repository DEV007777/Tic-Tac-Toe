export default function GameOver({ winner,aftermatch }) {
  return (
    <div id="game-over">
        <h2>Game Over!!!</h2>
     {winner && <p> {winner} Won!</p>}
     {!winner && <p> It's DRAW!!</p>}
      <p>
        <button onClick={aftermatch}>REMATCH</button>
      </p>
    </div>
  );
}
