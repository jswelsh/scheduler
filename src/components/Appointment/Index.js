import React from "react";

import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props){
  const { mode, transition, back } = useVisualMode()
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  /* console.log(mode) */
  return (
  <article className="appointment">
    <Header
      time={props.time}
    />
    {console.log(mode(props.interview))}
    {mode(props.interview) ? SHOW : EMPTY === EMPTY && <Empty />}
    {mode(props.interview) ? SHOW : EMPTY === SHOW && (
    <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
      /* had onedit and on delete in here */
    />
    )}
    </article>
  )
}


/* {props.interview &&
  <Show 
    student={props.interview && props.interview.student }
    interviewer={props.interview && props.interview.interviewer.name}
    onEdit={props.onEdit}
    onDelete={props.onDelete}
  />}
{(props.id !== "last")&&!props.interview && <Empty/>} */