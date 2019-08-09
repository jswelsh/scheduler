import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList(props){
/* const [interviewer, setInterviewer] = useState(0); */
return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
    {props.interviewers.map((interviewer) => {
      return(
        /* className={(interviewer.id === props.interviewer) &&"interviewers__item--selected"} */
        <li>
          <InterviewerListItem 
            name={interviewer.name}
            avatar={interviewer.avatar}
            id={interviewer.id}
            interviewer={props.interviewer}
            /* selected={props.interviewer===interviewer.id}  */
            /* setInterviewer={props.setInterviewer}/* () => props.onChange(props.id)} */ 
            onChange={props.onChange}/* props.setInterviewer}*/
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