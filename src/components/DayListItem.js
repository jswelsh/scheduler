/* import React from "react";
import classnames from "classnames";

import "components/DayListItem.scss";


export default function DayListItem(props) {
  const itemClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected, //conditional if true then this class becomes valid
    "day-list__item--full": props.spots === 0
  })
  const formatSpots = function () {
    if (props.spots > 1){
      return `${props.spots} spots remaining`;
    } else if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }
  }
  return (
  <article className={itemClass} onClick={() => props.setDay(props.name)}>
    <h2>{props.name}</h2>
    <h4>{formatSpots()}</h4>
  </article>
  )
}
 */

import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export function formatSpots(spots) {
  if (spots === 0) return "no spots remaining";
  if (spots === 1) return "1 spot remaining";
  return `${spots} spots remaining`;
}
export default function DayListItem(props) {
  const ItemClass = classnames("day-list__item",{
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
    
  return (
    <div className={ItemClass} onClick={() => props.setDay &&  props.setDay(props.name)}>
      <h3>{props.name}</h3>
      <p>{formatSpots(props.spots)}</p>
    </div>
  );
}