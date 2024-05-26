import React, { useState } from "react";
import Timer from './Timer'


export const Settings = ( {runTimer,setRunTimer}) => {
  const [showsettings, setShowSettings] = useState(true);
  const [reps, setReps] = useState();
  const [durr, setDurr] = useState();
  const [rest, setRest] = useState();
  const areAllNumbers =
    typeof reps === "number" &&
    typeof durr === "number" &&
    typeof rest === "number";
  // Checks if the number of reps, duration of rep and rest are all chosen. If they are, button changes to green so that the user knows they are ready to go.
  function handleClick(){
    if (areAllNumbers){setRunTimer(true);setShowSettings(false)} else{alert('PLEASE CHOOSE NUM OF REPS, DURATION OF REP AND REST IN BETWEEN FIRST!')};
  }
    console.log(runTimer)
  return (
    <>
      {showsettings && (
        <div>
          <h3>NUM OF REPS</h3>
          <form>
            <input
              type="number"
              onChange={(e) => setReps(parseFloat(e.target.value))}
            />
          </form>
          <h3>DURATION OF REP</h3>
          <form>
            <input
              type="number"
              onChange={(e) => setDurr(parseFloat(e.target.value))}
            />
          </form>
          <h3>REST IN BETWEEN</h3>
          <form>
            <input
              type="number"
              onChange={(e) => setRest(parseFloat(e.target.value))}
            />
          </form>
          <button
            style={{ backgroundColor: areAllNumbers ? "green" : "yellow" }}
            onClick={handleClick}
          >
            START
          </button>
        </div>
      )}
      <Timer reps={reps} durr={durr} rest={rest} handleClick={handleClick}/>
    </>
  );
};

export default Settings;
