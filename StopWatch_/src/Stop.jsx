import React, { useState, useEffect, useRef } from "react";

function Stop() {
  const [isrunning, setisrunning] = useState(false);
  const [elipsedtime, setelipsedtime] = useState(0);

  const starttime = useRef(0);
  const interval = useRef(null);

  useEffect(() => {
    if (isrunning) {
      interval.current = setInterval(() => {
        setelipsedtime(Date.now() - starttime.current);
      }, 10);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [isrunning]);

  function startT() {
    if (!isrunning) {
      setisrunning(true);
      starttime.current = Date.now() - elipsedtime;
    }
  }

  function stopT() {
    setisrunning(false);
  }

  function reset() {
    setisrunning(false);
    setelipsedtime(0);
  }

  function formatTime() {
    let minutes = Math.floor((elipsedtime / (1000 * 60)) % 60);
    let seconds = Math.floor((elipsedtime / 1000) % 60);
    let milliseconds = Math.floor((elipsedtime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  return (
    <div className="StopWatch">
      <div className="time">{formatTime()}</div>
      <div className="controls">
        <button onClick={startT}>Start</button>
        <button onClick={stopT}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stop;
