import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [timerValue, setTimerValue] = useState(0);
  const [timmerRunningStatus, setTimerRunningStatue] = useState(false);
  useEffect(() => {
    if (!timmerRunningStatus) return;
    const timer = setInterval(
      () => setTimerValue((prevTimerValue) => prevTimerValue + 1),
      1000
    );
    return () => clearTimeout(timer);
  }, [timmerRunningStatus]);
  function toggleTimer() {
    setTimerRunningStatue(!timmerRunningStatus);
  }
  return (
    <div className="App">
      <h1>{timerValue}</h1>
      <button onClick={toggleTimer}>
        {timmerRunningStatus ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}
