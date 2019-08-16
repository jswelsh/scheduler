import {  useEffect, useReducer  } from "react";
import axios from 'axios';




const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

const getAppointments = axios.get('api/appointments')
const getInterviewers = axios.get('api/interviewers')
const getDays = axios.get('api/days')

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case SET_DAY:
      return  {...state, day: action.day }
    case SET_APPLICATION_DATA: 
      return {...state, days:action.days, appointments: action.appointments, interviewers: action.interviewers}    
    case SET_INTERVIEW: 
    const dayOfSpotChange = Math.ceil(action.id/5) -1
         console.log(state.appointment, state.days, "tera")
       const changeSpots = ((state.days[dayOfSpotChange].spots) - 1 )
        const day = {
          ...state.days[dayOfSpotChange], 
          spots: changeSpots 
        }
        const days =  [...state.days]
        days[dayOfSpotChange] = day
        const appointment = {
          ...state.appointments[action.id],
          interview: action.interview
        };
        const appointments = {
          ...state.appointments,
          [action.id]: appointment
        }   
        console.log(appointments, days, "delta")
        return {...state, appointments, days}
/*        


     /*  console.log(state, "guli")
        const appointment = {
          ...state.appointments[action.id],
          interview: action.interview
        };
        const appointments = {
          ...state.appointments,
          [action.id]: appointment
        }
        console.log(appointments, "delta")
      return {...state, appointments, days: state.days}
     */
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers:  {}
  })


  useEffect(()=>{
    Promise.all([getDays, getAppointments, getInterviewers])
    .then(all => {
      console.log(all)
      dispatch({
        type: SET_APPLICATION_DATA,
        days:all[0].data,
        appointments: all[1].data,
        interviewers:all[2].data 
      });
    });
  // eslint-disable-next-line
  },[])
  const setDay = (day) => {dispatch({type:SET_DAY, day})}

  const bookInterview = (id, interview) => {
    return axios
      .put(`/api/appointments/${id}`, {interview})
      .then(() => {
        return dispatch({ type: SET_INTERVIEW, id, interview });
      })
      .catch((error) => {
        return error
      });
    }

  const cancelInterview = (id, interview) => { 
    return axios.delete(`/api/appointments/${id}`, {
      id:id
    }).then(() => {
      dispatch({ type: SET_INTERVIEW, id, interview: null });
    }).catch((error) => {
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

/* 
/*       console.log(state, "guli")
 
        
const dayOfSpotChange = Math.ceil(action.id/5) -1
/*         console.log(state.appointment, state.days, "tera")
       const changeSpots = ((state.days[dayOfSpotChange].spots) - 1 )
        const day = {
          ...state.days[dayOfSpotChange], 
          spots: changeSpots 
        }
        const days = { 
          ...state.days, 
          [dayOfSpotChange]: day
        }
        const appointment = {
          ...state.appointments[action.id],
          interview: action.interview
        };
        const appointments = {
          ...state.appointments,
          [action.id]: appointment
        }
/*         console.log(appointments, days, "delta")
    return {...state, appointments, days}
     */