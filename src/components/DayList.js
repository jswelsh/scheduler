/* import React from "react";
import DayListItem from "components/DayListItem"

 export default function DayList(props) {

  return (
    <ul>
    {props.days.map((day) => {
      return (
        <li>
          <DayListItem
            selected={day.name === props.day}
            name={day.name}
            spots={day.spots}
            setDay={() => props.setDay(day.name)}
          />
        </li>
      )
    })}
    </ul>
    );
}
 */

import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props) {
  return  (
    <ul>
      {props.days.map((day, index) => {
        return( 
          <DayListItem 
            key={day.id} 
            name={day.name} 
            spots={day.spots} 
            selected={props.day===day.name} 
            setDay={props.setDay}
          />
        )

      })}
    </ul>
  );
}