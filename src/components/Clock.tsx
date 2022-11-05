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

  return <span>{dateString}</span>;
};

export default Clock;
