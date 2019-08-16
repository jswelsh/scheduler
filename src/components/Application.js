import React from "react";

import DayList from "components/DayList";
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors";
import "components/Application.scss";
import Appointment from "./Appointment/Index";
import useApplicationData from "hooks/useApplicationData";

export default function Application() {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  console.log(state)

  const interviewers = getInterviewersForDay(state, state.day)
  let appointments = getAppointmentsForDay(state, state.day)

  let appointment = appointments
  .map((appointment) => {
    const interview = getInterview(state, appointment.interview); //move this up using ref
    return (
        <Appointment
          key={appointment.id}
          /* id={appointment.id}
          time={appointment.time} */
          {...appointment}
          interview={interview}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    });
  return (
    <main className="layout">
      <section className="sidebar">
        {
        <React.Fragment>
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />

          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu" />
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
        </React.Fragment>
        }   
      </section>
      <section className="schedule">
        {appointment}
      </section>
    </main>
  );
}
