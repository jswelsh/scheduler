import React/* , { useState } */ from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss"

/* 
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected
      setInterviewer={action("setInterviewer")}
*/
export default function InterviewerListItem(props){

  const itemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item-image":props.avatar
  })
  return (
    <li className={itemClass} onClick={props.setInterviewer}>
      <img class="interviewers__item-image" 
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
      
    </li>
  )



}

