import {  useEffect, useReducer  } from "react";
import axios from 'axios';

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

const getAppointments = axios.get('api/appointments')
const getInterviewers = axios.get('api/interviewers')
const getDays = axios.get('api/days')

const reducer = (state, action) => {
  //
  switch (action.type) {
    case SET_DAY:
      return  {...state, day: action.day }
    case SET_APPLICATION_DATA: 
      return {...state, days:action.days, appointments: action.appointments, interviewers: action.interviewers}    
    case SET_INTERVIEW: 
    const dayOfSpotChange = Math.ceil(action.id/5) -1
    //if this is a new appointment and interview 
    //  exists than reduce spots avb, else add spots avb
    const addOrRemoveSpot = () =>  
      (
        !action.interview? //if there is no appointment to book...
        (state.days[dayOfSpotChange].spots) + (1) //then add a spot
        :action.isAnewAppointment? //is this a new appointment?
        (state.days[dayOfSpotChange].spots) - (1) //then remove a spot
        :state.days[dayOfSpotChange].spots //else keep spots the same
      )
      // const changeSpots = ((state.days[dayOfSpotChange].spots) - (1) )
        const day = {
          ...state.days[dayOfSpotChange], 
          spots: addOrRemoveSpot()
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
        return {...state, appointments, days}

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
        //the returned data is in a fixed
        //order, so index matters
        type: SET_APPLICATION_DATA,
        days:all[0].data,
        appointments: all[1].data,
        interviewers:all[2].data 
      });
    });
  // eslint-disable-next-line
  },[])
  const setDay = (day) => {dispatch({type:SET_DAY, day})}

  const bookInterview = (id, interview, isAnewAppointment) => {
    return axios
      .put(`/api/appointments/${id}`, {interview})
      .then(() => {
        return dispatch({ type: SET_INTERVIEW, id, interview, isAnewAppointment});
      })
      .catch((error) => {
        return error
      });
    }

  const cancelInterview = (id) => { 
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
