import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";
import "./App.css";
import GameOver from "./Components/Game-Over";
import { WINNING_COMBINATIONS  } from './Components/Winning-Compo';

let playerss = {
 X :'PLAYER 1',
 O : 'PLAYER 2'
}

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function deriveWinnerr(currBoard,player){
  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const FirstSquareSymbol = currBoard[combination[0].row][combination[0].column];
    const SecondSquareSymbol = currBoard[combination[1].row][combination[1].column];
    const ThirdSquareSymbol = currBoard[combination[2].row][combination[2].column];

    if(FirstSquareSymbol && FirstSquareSymbol === SecondSquareSymbol && FirstSquareSymbol === ThirdSquareSymbol){
       winner = player[FirstSquareSymbol];

    }
  }
return winner; 
}

function App() {
  const [player ,setplayer] =useState(playerss );
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);

  let currBoard = [...initialBoard.map(arr => [...arr])];

  for(const turn of gameTurn){
   const{ square,player} =turn;
   const{row ,col}=square;
   currBoard[row][col]=player;
  }

  const winner=deriveWinnerr(currBoard,player);

  function handlePlayer( symbol ,newPlayer){
    setplayer(prevplayer  => {
      return{
        ...prevplayer,
        [symbol]:newPlayer
      };  
  });   
  }

  const hasdraw =gameTurn.length ===  9 && !winner;
  function handleSquare(rowIndex, colIndex) {
    setActivePlayer((curActive) => (curActive === "X" ? "O" : "X"));

    setGameTurn((prev) => {
      let currentPlayer = "X";
      if (prev.length > 0 && prev[0].player === "X") {
        currentPlayer = "O";
      }

      const updateturn = [
        { square: { row: rowIndex, col: colIndex },player : currentPlayer },
        ...prev,
      ];
      return updateturn;
    });
  }

  function Matchhandle(){
    setGameTurn([]);
  }

 

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayer}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayer}
          />
        </ol>
       
        {(winner || hasdraw) && <GameOver winner={winner}   aftermatch={Matchhandle}   /> }
        <GameBoard selectHandleSquare={handleSquare} board={currBoard} />
      </div>
      <Log  turns={gameTurn}/>
    </main>
  );
}

export default App;
