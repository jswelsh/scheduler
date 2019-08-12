
  export function getAppointmentsForDay(state, day) {
/*   console.log(day) */
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
      const hold = {...interview, interviewer: interviewers[interview.interviewer]}
      return hold
    }
    return null
  }

  export function getInterviewersForDay(state, day) {

    const days = [...state.days]
    const appointments = {...state.appointments}
    const [dayObj]  = days.filter(elt => elt.name == day)
    if (days[0] && dayObj && dayObj.appointments){
      return dayObj.appointments
      .map(x =>appointments[x].interview)
      .filter(x => Boolean(x))
      .map(x => x.interviewer)
    }
      return []
  }


