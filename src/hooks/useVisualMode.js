import  { useState  } from "react";


export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  let hold;
  /* if(!initial){ return "EMPTY"} */
  return{
  mode: (element) => {
    if(!element){ return "EMPTY"}
    
    return "SHOW"
  },
  transition: (state) => {
    hold = [...history]
    hold.push(state)
    return setHistory(() => [...hold]);
  },
   back: () => {
    hold = [...history]
    hold.pop()
    return  setHistory(() => [...hold]);
   }
}
}
