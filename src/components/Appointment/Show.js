import React from "react";

export default function Show(props){

  /* 
  props.student
  props.interviewer
  props.onEdit
  props.onDelete
  student:String eg. "Lydia Miller-Jones"
interviewer:Object eg. { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" }
onEdit:Function to be called when the user clicks the Edit button
onDelete:Function to be called when the user clicks the Delete button
 */
  return(
    <main class="appointment__card appointment__card--show">
    <section class="appointment__card-left">
    <h2 class="text--regular">{props.student}</h2>
    <section class="interviewer"></section>
    <h4 class="text--light">Interviewer</h4>
    <h3 class="text--regular">{props.interviewer.name}</h3>

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