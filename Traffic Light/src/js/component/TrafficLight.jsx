import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [showPurple, setShowPurple] = useState(false);

  const randomSelect = () => {
    const colors = ["red", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  const purple = () => {
    setShowPurple(!showPurple);
  };

  return (
    <> 
      <div className='trafficBox'> 
        <div
          onClick={() => setColor("red")}
          className={`red ${color === "red" ? "shine" : ""} ${showPurple ? "purple" : ""}`}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={`yellow ${color === "yellow" ? "shine" : ""} ${showPurple ? "purple" : ""}`}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={`green ${color === "green" ? "shine" : ""} ${showPurple ? "purple" : ""}`}
        ></div>
      </div>

      <div className='buttonGroup'>
        <button onClick={randomSelect}>Random choose</button>
        <button onClick={purple}>New Color</button>
      </div>
    </>
  );
};

export default TrafficLight;
