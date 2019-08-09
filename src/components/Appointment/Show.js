import React from "react";

export default function Show(props){

  return(
    <main class="appointment__card appointment__card--show">
    <section class="appointment__card-left">
    <h2 class="text--regular">{props.student}</h2>
    <section class="interviewer"></section>
    <h4 class="text--light">Interviewer</h4>
    <h3 class="text--regular">{props.interviewer}</h3>

    </section>
  <section class="appointment__card-right">
    <section class="appointment__actions">
      <img 
        onClick={props.onEdit}
        class="appointment__actions-button"
        src="images/edit.png"
        alt="Edit"
      />
      <img
        onClick={props.onDelete}
        class="appointment__actions-button"
        src="images/trash.png"
        alt="Delete"
      />
    </section>
  </section>
</main>
       
  )}