
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
    //guard clauses
    if(state.days.length === 0) return [];
    const interviewDay = state.days.findIndex((d) => d.name === day);
    //guard clauses
    if(interviewDay === -1) return [];
    return state.days[interviewDay].interviewers.map(id => state.interviewers[id])
  }


