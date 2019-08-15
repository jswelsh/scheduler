import { useState, useEffect  } from "react";
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Wednesday",
    days: [],
    appointments: {},
    interviewers:  {}
  });

  const setDay = ((day) => {setState((prev)=>({ ...prev, day: day }))})

  const getAppointments = axios.get('api/appointments')
  const getInterviewers = axios.get('api/interviewers')
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

  function bookInterview(id, interview){
    return axios
      .put(`/api/appointments/${id}`, {interview})
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          ...interview 
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
      setState((prev) => ({...prev, appointments}))})
      .catch((error) => {
      setState((prev) => ({...prev}))
      return error
    });
  }
  function cancelInterview(id, interview){ 
    return axios.delete(`/api/appointments/${id}`, {
      id:id
    }).then(() => {
      const appointment = {
        ...state.appointments[id],
        ...interview
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      setState((prev) => ({...prev, appointments}))
    }).catch((error) => {
            setState((prev) => ({...prev}))
            return error
          });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}