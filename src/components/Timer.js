import React, { useEffect, useState } from 'react';

export const Timer = ({ reps, durr, rest }) => {
  const [repeat, setRepeat] = useState(reps);
  const [seconds, setSeconds] = useState(durr);
  const [rests, setRests] = useState(rest);
  const [isRunning, setIsRunning] = useState(true);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && !isResting && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSecs) => prevSecs - 1);
      }, 1000);
    } else if (!isRunning && isResting && rests > 0) {
      intervalId = setInterval(() => {
        setRests((prevRest) => prevRest - 1);
      }, 1000);
    } else if (seconds === 0 && repeat > 0) {
      setIsResting(true);
      setRepeat((prevRepeat) => prevRepeat - 1);
      setSeconds(durr);
      setIsRunning(false);
    } else if (rests === 0 && isResting) {
      setIsResting(false);
      setRests(rest);
      setIsRunning(true);
    } else if (seconds === 0 && repeat === 0) {
      setIsRunning(false);
      alert('Workout Complete!');
      window.location.reload()
    }

    return () => clearInterval(intervalId);
  }, [isRunning, isResting, seconds, rests, repeat, durr, rest]);

  useEffect(() => {
    if (reps !== undefined && durr !== undefined && rest !== undefined) {
      setRepeat(reps);
      setSeconds(durr);
      setRests(rest);
      setIsRunning(true);
      setIsResting(false);
    }
  }, [reps, durr, rest]);

  return (
    <>
    <div className='timer-div'>
      <div>Sets left: {repeat}</div>
      <div className={isRunning?'highlight':''}>Excercise: {seconds}</div>
      <div className={isResting?'highlight':''}>Rest: {rests}</div>
      </div>
    </>
  );
}

export default Timer;