
  export function getAppointmentsForDay(state, day) {

  let appointmentsForDay;
  state.days.forEach(elt => {
    if(elt.name === day){
    /*   console.log(elt.appointments, "123") */
      appointmentsForDay = elt.appointments;
       /* return appointmentsForDay  */
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
