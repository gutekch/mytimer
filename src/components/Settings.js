import React, { useState } from "react";

export const Settings = () => {
    const [settings,setSettings] = useState('false');
    const [reps,setReps] = useState();
    const [durr,setDurr] = useState();
    const [rest,setRest] = useState();
    const [settingschosen,setSettingschosen] = useState(false);
    const areAllNumbers = typeof reps === 'number' && typeof durr === 'number' && typeof rest === 'number';
    // Checks if the number of reps, duration of rep and rest are all chosen. If they are, button changes to green so that the user knows they are ready to go. 
  return (
    <>
      <div>
        <h3>NUM OF REPS</h3>
        <form>
          <input type="number" onChange={(e)=>setReps(parseFloat(e.target.value))}/>
        </form>
        <h3>DURATION OF REP</h3>
        <form>
          <input type="number" onChange={(e)=>setDurr(parseFloat(e.target.value))}/>
        </form>
        <h3>REST IN BETWEEN</h3>
        <form>
          <input type="number" onChange={(e)=>setRest(parseFloat(e.target.value))}/>
        </form>
        <button style={{backgroundColor: areAllNumbers ? 'green' : 'yellow'}}>START</button>
      </div>
    </>
  );
};

export default Settings;
