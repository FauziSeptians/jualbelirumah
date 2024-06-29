import { useState, useEffect } from "react";

export default function TimeCounter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = `${
    daysOfWeek[currentTime.getDay()]
  }, ${currentTime.toLocaleDateString()}`;

  return (
    <div className="text-end p-4 text-white">
      <p className="text-lg">{formattedTime}</p>
      <p className="text-xs opacity-50 tracking-wider">{formattedDate}</p>
    </div>
  );
}
