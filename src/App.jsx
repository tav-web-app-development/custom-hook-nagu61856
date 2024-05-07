import React, { useState, useEffect, useRef } from 'react';

// Custom hook to get current time every second
function useTime() {
  const [time, setTime] = useState(new Date());

  // Ref to store interval ID
  const intervalRef = useRef();

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      setTime(new Date());
    };

    // Start interval and store its ID in the ref
    intervalRef.current = setInterval(updateTime, 1000);

    // Cleanup function to cancel interval
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array to run effect only once

  return time;
}

// Clock component
function Clock() {
  const time = useTime();

  // Format time to display hours, minutes, and AM/PM
  const hours = time.getHours() % 12 || 12;
  const minutes = ('0' + time.getMinutes()).slice(-2);
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className="clock">
      {hours}:{minutes} {ampm}
    </div>
  );
}

export default Clock;
