import './App.css';
import Header from './components/Header.js'
import Settings from './components/Settings.js'
import { useState } from 'react';


function App() {
  const [runTimer, setRunTimer] = useState(false);
  return (
    <div className="App">
      <Header/>
      <Settings runTimer = {runTimer} setRunTimer={setRunTimer}/>

    </div>
  );
}

export default App;
