export function getAppointmentsForDay(state, day) {
  
  let AppointmentsForDay;
  
  state.days.forEach(elt => {
    if(elt.name === day){
      AppointmentsForDay = elt.appointments;
    }
  }   
  )
  if(!AppointmentsForDay){
    return []
   }
  let hold = AppointmentsForDay.map(x => state.appointments[x])

return hold;
}