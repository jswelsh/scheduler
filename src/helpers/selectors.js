
  export function getAppointmentsForDay(state, day) {

  let appointmentsForDay;
  state.days.forEach(elt => {
    if(elt.name === day){
      console.log(elt.appointments, "123")
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
    console.log(interview, "fero")
    if (!interview){
      return null
    }
    let hold = {...interview, interviewer:state.interviewers[interview.interviewer]}
    console.log(hold, "deka")
    return hold
  }
/* {     student: expect.any(String),
      interviewer: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        avatar: expect.any(String)}
  }
    day: "Monday",
    days: [],
    appointments: {},
    interviewers:  {
      "2": {
        id: 2,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png"
      }
    }
 */
/* 
  export default function getAppointmentsForDay(appointments, days , day) {
  let appointmentsArray;
  let keys = Object.keys(days)
  let appointmentsForDay= []
    keys.forEach(elt => {
    if(days[parseInt(elt)].name === day){
      appointmentsArray = (days[parseInt(elt)].appointments);
      appointmentsArray.forEach(elt => { 
        appointmentsForDay.push(appointments[elt])
      });    
    }
  });
  return appointmentsForDay
} */