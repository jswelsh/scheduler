import React, {Fragment} from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem.js";
import DayList from "components/DayList.js";
import InterviewerListItem from "components/InterviewerListItem.js";
import InterviewerList from "components/InterviewerList.js";
import Appointment from "components/Appointment/Index.js";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Form"

  storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));


  storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />)
  .add("Selected", () => <DayListItem name="Monday" spots={1} selected />)
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} />
  ));
  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];
  const interviewers = [
    { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
  ];

  const interviewer = {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png"
  };
  storiesOf("DayList", module)
    .addParameters({
      backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
    })
    .add("Monday", () => (
      <DayList days={days} day={"Monday"} setDay={action("setDay")} />
    ))
    .add("Tuesday", () => (
      <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
    ));

    
    storiesOf("InterviewerListItem", module)
      .addParameters({
        backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
      })
      .add("Unselected", () => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
        />
      ))
      .add("Selected", () => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          interviewer={interviewer.id}
        />
      ))
      .add("Clickable", () => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          onChange={action("setInterviewer")}
          
        />
      ));

    
    storiesOf("InterviewerList", module)
      .addParameters({
        backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
      })
      .add("Initial", () => (
        <InterviewerList
          interviewers={interviewers}
          onChange={action("setInterviewer")}
       />
      ))
      .add("Preselected", () => (
        <InterviewerList
          interviewers={interviewers}
          onChange={action("setInterviewer")}
          interviewer={3}
          
        />
      ));

  storiesOf("Appointment", module) 
    .addParameters({backgrounds: [{ name: "white", value: "#fff", default: true }]
  }).add("Appointment", () => <Appointment />)
    .add("Appointment with Time", () => 
      <Header time="12pm" />)
    .add("Appointment Empty", () => <Empty onAdd={action("onAdd")} />)
    .add("Appointment Show", () => 
      <Show 
        student={"Lydia Miller-Jones"}
        interviewer={interviewer.name}
        onEdit={action("onEdit")}
        onDelete={action("onDelete")}
      />)
    .add("Appointment confirm", () => 
      <Confirm
        message="delete Apppointment?"
        onConfirm={action("onConfirm")}
        onCancel={action("onCancel")}
      />)
  
    .add("Appointment Deleting", () => 
      <Status
        message="Deleting"
      />)
    .add("Appointment Error", () =>  
      <Error
        message="Could not delete appointment "
        onClose={action("onClose")}
      />)
   
    storiesOf("Appointment", module) 
      .addParameters({backgrounds: [{ name: "white", value: "#fff", default: true }]    
    }).add("create", () => (
        <Form 
        interviewers={interviewers} 
        onSave={action("onSave")} 
        onCancel={action("onCancel")}
        />
    )).add("edit", () =>  (
        <Form 
        name="Lydia Miller-Jones"
        interviewer={3}
        interviewers={interviewers} 
        onSave={action("onSave")} 
        onCancel={action("onCancel")}
        />
      ))

      storiesOf("Appointment booking", module) 
      .addParameters({backgrounds: [{ name: "white", value: "#fff", default: true }]    
    }).add("Appointment Empty", () => (
        <Fragment>
          <Appointment id={1} time="12pm" />
          <Appointment id="last" time="1pm" />
        </Fragment>
      )).add("Appointment Booked", () => (
        <Fragment>
          <Appointment
            id={1}
            time="12pm"
            interview={{ student: "Lydia Miller-Jones", interviewer }}
          />
          <Appointment id="last" time="1pm" />
        </Fragment>
      ))
/*       student={"Lydia Miller-Jones"}
      interviewer={interviewer}
      onEdit={action("onEdit")}
      onDelete={action("onDelete")} */