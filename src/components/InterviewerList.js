import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from 'prop-types';
/* 
check that InterviewerList is being provided
with valid values, warning in console if not
*/
InterviewerList.propTypes = {
  interviewer: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

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
            interviewer={props.interviewer}//change like daylistitem

          />
        </li>
      )
    })}
    </ul>
  </section>
)}
