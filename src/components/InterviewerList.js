import React, { useState } from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props){
/* const [interviewer, setInterviewer] = useState(0); */
return (
  <section class="interviewers">
    <h4 class="interviewers__header text--light">Interviewer</h4>
    <ul class="interviewers__list">
    {props.interviewers.map((interviewer) => {
      return(
        <li>
          <InterviewerListItem 
   /*          id={interviewer.id} */
            name={interviewer.name}
            avatar={interviewer.avatar}
            selected={props.interviewer===interviewer.id} 
            setInterviewer={(event) => props.setInterviewer(interviewer.id)}
            /* {() => props.setInterviewer(interviewer.name)} */
          />
        </li>
      )
    })}
    </ul>
  </section>
);
}

/* 
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={action("setInterviewer")}
*/