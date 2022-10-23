import { useEffect, useState } from "react";

const Clock = () => {
    const [dateString, setDateString] = useState<string>();
  
    useEffect(() => {
      setInterval(() => {
        const newDateString = new Date().toLocaleTimeString();
        setDateString(newDateString);
      }, 1000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <div>
        <h4>{dateString}</h4>

      </div>
    );
  };
  
  export default Clock;