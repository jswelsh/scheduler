import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props){

  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
    {props.interviewers.map((interviewer) => {
      return(
        <li>
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