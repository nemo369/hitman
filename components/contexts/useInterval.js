import { useState, useEffect } from 'react';

 const useInterval =(handler, interval) => {
  const [intervalId, setIntervalId] = useState();
  useEffect(() => {
    const id = setInterval(handler, interval);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);
  return () => clearInterval(intervalId);
};
export default useInterval