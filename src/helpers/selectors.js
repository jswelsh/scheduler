
  export function getAppointmentsForDay(state, day) {

  let appointmentsForDay;
  state.days.forEach(elt => {
    if(elt.name === day){
      appointmentsForDay = elt.appointments;
    }})
    if(!appointmentsForDay){
      return []
    }
    let hold = appointmentsForDay.map(x =>state.appointments[x])

  return hold;
  }

  export function getInterview(state, interview) {
    if (!interview){
      return null
    }
    let hold = {...interview, interviewer:state.interviewers[interview.interviewer]}
    return hold
  }

  export function getInterviewersForDay(state, day) {
    let appointmentsForDay;
    state.days.forEach(elt => {
      if(elt.name === day){
        appointmentsForDay = elt.appointments;
      }})

      if(!appointmentsForDay){
        return []
      }
      let hold = appointmentsForDay
        .map(x =>state.appointments[x].interview)
        .filter(x => Boolean(x))
        .map(x => x.interviewer)
      console.log((hold))
      return hold;
  }