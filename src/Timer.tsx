import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('timerInterval');
      setCount((count) => {
        return count + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const resetTimer = () => {
    setCount(0);
  };

  return (
    <div className="timer" onClick={resetTimer}>
      {count}
    </div>
  );
};

export default Timer;