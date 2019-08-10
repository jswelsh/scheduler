import React from "react";

import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

export default function Appointment(props){

  return (
  <article className="appointment">
    <Header
      time={props.time}
    />
      {props.interview &&
        <Show 
          student={props.interview && props.interview.student }
          interviewer={props.interview && props.interview.interviewer.name}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />}
      {(props.id !== "last")&&!props.interview && <Empty/>}
  </article>
  )
}
