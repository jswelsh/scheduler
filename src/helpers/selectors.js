import { stat } from "fs";

  export function getAppointmentsForDay(state, day) {

  const days = [...state.days]
  const appointments = {...state.appointments}
  const [dayObj] = days.filter(elt => elt.name == day)
  if (days[0] && dayObj && dayObj.appointments){
    return dayObj.appointments.map(x =>appointments[x])
  }
    return []
  }

  export function getInterview(state, interview) {
    if (interview){
      const interviewers = {...state.interviewers}
      return {...interview, interviewer: interviewers[interview.interviewer]}
    }
    return null
  }

  export function getInterviewersForDay(state, day) {

    // const days = [...state.days]
    // const interviewers = {...state.interviewers}
    // const appointments = {...state.appointments}
    // const [dayObj] = days.filter(elt => elt.name == day)
    // if days([0] && dayObj && dayObj.appointments){
    //   return dayObj.appointments
    //   .map(x =>appointments[x].interview)
    //   .filter(x => Boolean(x))
    //   .map(x => x.interviewer).map(x => interviewers[x])
    // }

      if(state.days.length === 0) return [];

      const interviewDay = state.days.findIndex((d) => d.name === day);

      if(interviewDay === -1) return [];
   
      return state.days[interviewDay].interviewers.map(id => state.interviewers[id])
  }


