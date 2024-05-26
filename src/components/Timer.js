import React, { useEffect, useState } from 'react'

export const Timer = ({reps,durr,rest,handleClick}) => {
    const [repeat,setRepeat] = useState(reps);
    const [seconds,setSeconds] = useState(durr);
    const [rests,setRests] = useState(rest);
    const [isRunning,setIsRunning] = useState(true);
    
    useEffect(()=>{
        let intervalId;
        console.log('useEffect is working')
        intervalId = setInterval(()=>{
            setSeconds((prevSecs)=>prevSecs-1)
        },1000)
    return()=>clearInterval(intervalId)},[handleClick]
);

  return (
    <>
    <p>Reps:{reps}</p>
    <p>Duration:{seconds}</p>
    <p>Rest:{rest}</p>
    </>
  )
}

export default Timer;