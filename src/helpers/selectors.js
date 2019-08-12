
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
    if (!interview){
      return null
    }
    const interviewers = {...state.interviewers}
    const hold = {...interview, interviewer: interviewers[interview.interviewer]}
    return hold
  }

  export function getInterviewersForDay(state, day) {
    let appointmentsForDay = [];
    const days = [...state.days]
    const appointments = {...state.appointments}
    days.forEach(elt => {
      if(elt.name === day){
        appointmentsForDay = elt.appointments;
      }})

      if(!appointmentsForDay){
        return []
      }
      const hold = appointmentsForDay
        .map(x =>appointments[x].interview)
        .filter(x => Boolean(x))
        .map(x => x.interviewer)
      return hold;
  }