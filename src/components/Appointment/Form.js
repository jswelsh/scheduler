import React, { useState }  from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList.js";

export default function Form(props){


const [error, setError] = useState("");
const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null); //may need to be zero
function validate() {
  if (name === "") {
    setError("Student name cannot be blank");
    return;
  } 
  setError("")
  props.onSave(name, interviewer);
}
function cancel () {
  setName("")
  props.onCancel()
  
}

const Cancel = { danger:"danger",children:"Cancel", onClick: () => cancel()}
const Save = { confirm:"confirm", children:"Save", onClick: () => validate()}


return (
  <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()} >
        <input
          data-testid="student-name-input"
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={event => setName(event.target.value)} //make like onchange for interviewerlist
          data-testid="student-name-input"
        />
      </form>
      <section className="appointment__validation">{error}</section>
      <InterviewerList 
        interviewers={props.interviewers} 
        interviewer={interviewer} 
        onChange={setInterviewer}
      />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
      {Button(Cancel)}
      {Button(Save)}
      </section>
    </section>
  </main>
)
}