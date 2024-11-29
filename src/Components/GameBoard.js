



export default function GameBoard({selectHandleSquare,board}) {

/* const [ currBoard,setBoard ] = useState(initialBoard);



 function handleChangeBoard(rowIndex,colIndex){
    setBoard((preBoard)=>{
        const  updateBoard =[...preBoard.map((innerArray) => innerArray)];
        updateBoard[rowIndex][colIndex] =ActivePP;
        return updateBoard;

    });
    selectHandleSquare();
   

 }*/

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => ( <li key="rowIndex">
          <ol>
            {row.map((symbol, colIndex) => (
              <li key="colIndex">
                <button onClick={() => selectHandleSquare(rowIndex,colIndex)} disabled={symbol != null}>{symbol}  </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
