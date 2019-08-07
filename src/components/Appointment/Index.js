import React from "react";
/* import "src/components/Appointment/styles.scss" */
import "components/Appointment/styles.scss"
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";

export default function Appointment(props){
  return (
  <article className="appointment">
    <Header
    time={props.time}
    />
    { 
      props.Appointment && <Empty
      onAdd={(event) => "hi"}
    />}
  </article>
  )
}
