
export function getAppointmentsForDay(state, day) {

  const days = [...state.days]
  const appointments = {...state.appointments}
  const [infoForDay] = days.filter(elt => elt.name === day)
  //ensure that there is valid days, a day and appointment for day
  if (days[0] && infoForDay && infoForDay.appointments){
    return infoForDay.appointments.map(x =>appointments[x])
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

    if(state.days.length === 0) return [];
    console.log(state.days, day, "melo")
      const interviewDay = state.days.findIndex((d) => d.name === day);
    if(interviewDay === -1) return [];
    console.log(state.days[interviewDay].interviewers.map(id => state.interviewers[id]))
      return state.days[interviewDay].interviewers.map(id => state.interviewers[id])
  }


