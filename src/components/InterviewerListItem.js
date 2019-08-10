import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props){
  const selected = ( props.interviewer === props.id)
  const itemClass = classnames("interviewers__item", {
    "interviewers__item--selected": selected,
    "interviewers__item-image":props.avatar
  })
  return (
    <li className={itemClass} onClick={()=> props.onChange(props.id)}>
      <img class="interviewers__item-image" 
        src={props.avatar}
        alt={props.name}
      />
      {props.name}   
    </li>
  )



}

