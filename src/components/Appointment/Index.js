import React from "react";
/* import "src/components/Appointment/styles.scss" */
import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";



export default function Appointment(props){
/*   export function checkIfSlotIsEmpty(elt) {
  if (elt === 0) { 
    return (<Empty onAdd={props.onAdd}/>)
  } else {
    return (    

    )
  }
} */

  return (
  <article className="appointment">
  {/*   <Header
    time={props.time}
    />
      <Show 
        student={props.student}
        interviewer={props.interviewer.name}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
      /> */}

  </article>
  )
}
