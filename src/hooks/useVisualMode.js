import  { useState  } from "react";
/* 

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  let hold;
 
  return{
  mode: history[history.length-1]

  ,
  transition: (state) => {
    hold = [...history]
    hold.push(state)
    setHistory(hold);
  },
   back: () => {
    hold = [...history]
    hold.pop()
    setHistory(hold);
   }
}
}
 */

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  
  function transition(mode, replace) {
    console.log(mode, replace, history, "delta")
    setHistory(prev => 
      (
        replace
        ? [...prev.slice(0, prev.length - 1), mode]
        : [...prev, mode]
      )
    );
    console.log(history, "echo")
  }

  function back() {
    if (history.length < 2) return;
    setHistory(prev => ([...prev.slice(0, history.length - 1)]));
  }

  return { mode: history[history.length - 1], transition, back };
}