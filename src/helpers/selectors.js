export default function getAppointmentsForDay(appointments, days , day) {
  let appointmentsArray;
  let keys = Object.keys(days)
  let appointmentsForDay= []
    keys.forEach(elt => {

        if(days[parseInt(elt)].name === day){
          console.log(days[parseInt(elt)].appointments)
          appointmentsArray = (days[parseInt(elt)].appointments);
          appointmentsArray.forEach(elt => { 
            appointmentsForDay.push(appointments[elt])
          });    
        }
  });
  console.log(appointmentsForDay);
  return appointmentsForDay
}