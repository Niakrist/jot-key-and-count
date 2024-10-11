import React, { useEffect, useState } from "react";

const generateColor = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += arr[Math.floor(Math.random() * arr.length)];
  }
  return color;
};

const TimerWithCancel = () => {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const roor = document.getElementById("root");

    const timer = setTimeout(() => {
      if (isTimerStarted) {
        setCount(count + 1);
        roor.style.backgroundColor = generateColor();
        setIsTimerStarted(false);
      }
    }, 2000);

    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
        console.log("Backspace");
        clearTimeout(timer);
        setIsTimerStarted(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      console.log("clear");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTimerStarted]);

  const handleClick = () => {
    console.log("+++");
    setIsTimerStarted(true);
  };

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={handleClick}>Запустить таймер</button>
    </div>
  );
};

export default TimerWithCancel;
