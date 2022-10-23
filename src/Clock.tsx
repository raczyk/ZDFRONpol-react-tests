import { useEffect, useState } from "react";

const Clock = () => {
    const [dateString, setDateString] = useState<string>();
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setInterval(() => {
        const newDateString = new Date().toLocaleTimeString();
        setDateString(newDateString);
        setCount((count) => count + 1);
        console.log('my interval', count);
      }, 1000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <div>
        <h4>{dateString}</h4>
        {count}
      </div>
    );
  };
  
  export default Clock;