import { useState } from "react";


export default function Player({ initialName, symbol,isActive,onChangeName }) {
   const [playername,setname]= useState(initialName);
    const [ isediting,setediting] =useState(0);
 
    function handleEditChange(){
          setediting ((edit) => !edit);
          onChangeName(symbol,playername)
   }

   function handleChange(event){
    setname(event.target.value);
   }
    let play = <span className="player-name">{playername}</span>
    if(isediting){
       play= <input id="in-css" type="text" required value={playername} onChange={handleChange}/>
    }

  return (
    <>
      <li className={isActive  ? 'active' :'undefined'}>
        <span id="player">
                      <span>{play}</span> 
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditChange}>{isediting ? 'Save' : 'Edit'}</button>
      </li>
    </>
  );
}
