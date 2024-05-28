import React, { useState } from "react";
import Timer from './Timer'

export const Settings = ({ runTimer, setRunTimer }) => {
  const [showSettings, setShowSettings] = useState(true);
  const [reps, setReps] = useState();
  const [durr, setDurr] = useState();
  const [rest, setRest] = useState();
  const areAllNumbers =
    typeof reps === "number" &&
    typeof durr === "number" &&
    typeof rest === "number";

  function handleClick() {
    if (areAllNumbers) {
      setRunTimer(true);
      setShowSettings(false);
    } else {
      alert('PLEASE CHOOSE NUM OF REPS, DURATION OF REP AND REST IN BETWEEN FIRST!');
    }
  }

  return (
    <>
      {showSettings && (
        <div className="settings">
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
          <button className="settings-button"
            style={{ backgroundColor: areAllNumbers ? "green" : "yellow" }}
            onClick={handleClick}
          >
            START
          </button>
        </div>
      )}
      {runTimer && <Timer reps={reps} durr={durr} rest={rest} />}
    </>
  );
};

export default Settings;