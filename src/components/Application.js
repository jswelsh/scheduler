
import React, { useState, useEffect  } from "react";
import DayList from "components/DayList";

import "components/Application.scss";
import Appointment from "./Appointment/Index";


const appointments = [
  {
    id:7,
    time: "11am"
  },
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "Lydia",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "5pm",
    interview: {
      student: "Lydia -Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];
/* 
 const [likes, setLikes] = useState(0);
  useEffect(() => {
    document.body.className = `bg--${likes % 2}`;
    if (likes > 0) {
      const timeout = setTimeout(() => setLikes(prev => prev - 1), 1000);
      return () => clearInterval(timeout);
    }
  }, [likes]);
*/
export default function Application(props) {
/*   const [days, setDays] = useState([]);
  const [day, setDay] = useState("Monday"); */

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  const setDay = day => setState({ ...state, day });
  const setDays = days => setState({ ...state, days });
  
 /*  useEffect(() => {return () => clearInterval()},) */
 
  //setState(prev => ({ ...prev, days }));

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
          setDay={setDay}/* (day)=>setState(day) */
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
      {appointments.map((appointment) => {
        return<Appointment {...appointment} />})}
      </section>
    </main>
  );
}