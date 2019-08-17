import React from "react";

import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form"
import Status from "components/Appointment/Status"
import Error from "components/Appointment/Error"
import Confirm from "components/Appointment/Confirm"
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const EDIT = "EDIT"
const SAVING = "SAVING"
const DELETING = "DELETING"
const CONFIRMATION = "CONFIRMATION"
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"


export default function Appointment(props){

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)

  function save(student, interviewer, isAnewAppointment) {
    const interview = {
      student, 
      interviewer// changed
    };
    transition(SAVING)

    props
    .bookInterview(props.id, interview, isAnewAppointment)
    .then((error) => {
      if(error){transition(ERROR_SAVE, true)}
      transition(SHOW)
    })
  }

  function remove() {
    const interview = null
    transition(DELETING, true)

    props
    .cancelInterview(props.id, interview)
    .then((error) => { 
      if(error){transition(ERROR_DELETE, true)}
      transition(EMPTY)
    })
  }
 console.log(props.interview, "helix")
  return (
    <article className="appointment">
      <Header
        time={props.time}
      />
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        id={props.id}
        onEdit={() => {transition(EDIT)}}
        onDelete={() => {transition(CONFIRMATION)}}

      />
    )}
    {mode === EDIT && (
      <Form 
        name={props.interview.student}
        interviewer={props.interview.interviewer}
        interviewers={props.interviewers}
        onCancel={() => {back()}}
        onEdit={save}
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

    {mode === SAVING && (
      <Status message="Saving" />
    )}
    {mode === ERROR_SAVE && (
      <Error message="Error Saving" />
    )}    
    {mode === DELETING && (
      <Status message="Deleting" />
    )}
    {mode === ERROR_DELETE && (
      <Error message="Error Deleting" />
    )}
    {mode ===  CONFIRMATION && (
      <Confirm
        message="delete Apppointment?"
        onConfirm={() => {remove()}}
        onCancel={() => {back()}}
      />
    )}

    </article>
  )
}


