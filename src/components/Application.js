import React, { useState, useEffect  } from "react";
import axios from 'axios';
import DayList from "components/DayList";
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors";

import "components/Application.scss";
import Appointment from "./Appointment/Index";

export default function Application(props) {

  const [state, setState] = useState({
    day: "Wednesday",
    days: [],
    appointments: {},
    interviewers:  {}
  });

  const setDay = ((day) => {setState((prev)=>({ ...prev, day: day }))})

  
  /* const getAvbInterviewers = axios.get('api/available_interviewers') */
  const getAppointments = axios.get('api/appointments')
  const getInterviewers = axios.get('api/interviewers')
  /* const getInterviews = axios.get('api/interviews') */
  const getDays = axios.get('api/days')
   useEffect(()=>{

   Promise.all([getDays, getAppointments, getInterviewers])
   .then(all => {
    setState((prev)=>({ 
       ...prev, 
      days:all[0].data,
      appointments: all[1].data,
      interviewers:all[2].data 
    }));
  });
  // eslint-disable-next-line
 },[])
   /*  const appointmentsSet = getAppointmentsForDay; */
    /* const interviewersList = getInterviewersForDay */
/*     const setAppointment = (id, interview) => { console.log ( {...appointments[id], interview: {...interview}}, "yo")}
 */
    const bookInterview = (id, interview) => {
      return axios.put(`/api/appointments/${id}`, {
        interview: interview
      }).then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        console.log(appointments)
        setState((prev) => ({...prev, appointments }))

      });

    }
    /* const interviewers = getInterviewersForDay(state, state.day).map(x => holdUP[x]) */
    const interviewers = getInterviewersForDay(state, state.day)
    let appointments = getAppointmentsForDay(state, state.day)
     let schedule = appointments
    .map((appointment) => {
      const interview = getInterview(state, appointment.interview);
      console.log("appointment", interview)  
      return (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            time={appointment.time}
            interview={interview}
            interviewers={interviewers}
            bookInterview={bookInterview}
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
         /* useEffect(()=>{setState((prev)=>({ ...prev, days: state.days }))},[state.days])*/
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
        {schedule}
      </section>
    </main>
  );
}
/*  
          console.log(state, "zulu")}
        {getAppointmentsForDay(state, state.day) 
          .map(appointment => 
            <Appointment {
            ...appointment}  )
/>
*/  
/* state.appointments, state.days, state.day */
