import React from "react";

function Tickler() {
//   return <button onClick={()=> console.log("Kwendeni hukoooooooo!")}>Tickle me!</button>;
// } OR what's written below:
function tickle(event){
  console.log(event);
}
return <button onClick={tickle}>Tickle Me!!!</button>
}
export default Tickler;