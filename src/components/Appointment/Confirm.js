import React from "react";
import Button from "components/Button";

export default function Confirm(props){
  
  const Cancel = { danger:"danger",children:"Cancel", onClick: props.onCancel}
  const Confirm = { confirm:"confirm", children:"Confirm", onClick: props.onConfirm}
  
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        {Button(Cancel)}
        {Button(Confirm)}
      </section>
    </main>
  )
}