import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return <div className="flex justify-end">{time.toLocaleTimeString()}</div>;
};

export default Clock;
