import React, { useState, useEffect  } from "react";
import axios from 'axios';
import DayList from "components/DayList";
import getAppointmentsForDay from "helpers/selectors.js";
import "components/Application.scss";
import Appointment from "./Appointment/Index";

export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    Interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState({ ...state, days });
  const setAppointments = appointments => setState({ ...state, appointments });
/*   const setInterviewers = Interviewers => setState({ ...state, Interviewers }); */
  const getDays = axios.get('api/days')
  const getAppointments = axios.get('api/appointments')
  const getInterviewers = axios.get('api/interviewers')
   useEffect(()=>{

   Promise.all([getDays, getAppointments, getInterviewers]
    
  ).then(all => {
    setState((prev)=>({
       ...prev, 
      days:all[0].data,
      appointments: all[1].data,
      interviewers:all[2].data 
    }));
  });
 },[])

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
      {getAppointmentsForDay(state.appointments, state.days, state.day)
        .map(appointment => 
        <Appointment {
          ...appointment} 
        />)}
      </section>
    </main>
  );
}
  