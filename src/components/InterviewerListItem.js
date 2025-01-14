import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props){

  const selected = (props.interviewer && props.interviewer.id === props.id)

  const itemClass = classnames("interviewers__item", {
    "interviewers__item--selected": selected,
    "interviewers__item-image":props.avatar
  })

  return (
    <div className={itemClass}>
      <img className="interviewers__item-image" 
        src={props.avatar}
        alt={props.name}/>
      {selected && props.name}
    </div>   
  )
}
