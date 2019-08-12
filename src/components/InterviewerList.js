import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props){

  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewers</h4>
    <ul className="interviewers__list">
    {props.interviewers.map((interviewer) => {
      return(
        <li key={interviewer.id} onClick={()=> props.onChange(interviewer.id)}>
          <InterviewerListItem 
            name={interviewer.name}
            avatar={interviewer.avatar}
            id={interviewer.id}
            interviewer={props.interviewer}
            onChange={props.onChange}
          />
        </li>
      )
    })}
    </ul>
  </section>
);
}