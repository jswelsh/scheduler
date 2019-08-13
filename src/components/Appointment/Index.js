import React, { useEffect } from "react";

import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Form"
import Status from "components/Appointment/Status"
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING"


export default function Appointment(props){

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)
  // useEffect(()=>{
  //   console.log("test")
  //   transition(mode, SHOW);
  // },[props.interview])
  console.log("herehehrer",mode, props.interview)
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer : interviewer
    };

    transition(SAVING)
    props.bookInterview(props.id, interview).then(() => {
       transition(SHOW)
    })
   
  }
  return (
    <article className="appointment">
    <Header
      time={props.time}
      />
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer.name}
      
          />
          )}
    {mode === CREATE && (
    <Form 
      interviewers={props.interviewers}
      onCancel={() => {back()}}
      onSave={save}
    />
    )}    
    {mode === EMPTY && (
      <Empty 
      onAdd={() => {transition(CREATE)}}
    />
    )}

    {mode === SAVING && (<Status message="Saving" />)}
    
      </article>
  )
}


