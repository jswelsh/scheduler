import React, { useState }  from "react";
import Button from "components/Button";
import InterviewerList from "./InterviewerList";

export default function Form(props){


const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.interviewer || 0);
const Cancel = { danger:"danger",children:"Cancel", onClick: props.onCancel}
const Save = { confirm:"confirm", children:"Save", onClick: () => props.onSave(name, interviewer)}

return (
  <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()} >
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={event => setName(event.target.value)} //make like onchange for interviewerlist
        />
      </form>
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