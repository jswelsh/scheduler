import React from "react";

export default function Empty(props){
return(
  /* onAdd:Function */

  <main class="appointment__add">
    <img
    onClick={props.onAdd}
    class="appointment__add-button"
    src="images/add.png"
    alt="Add"
    />
  </main>


)}