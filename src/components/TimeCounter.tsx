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
    <div className="p-4 text-end text-white">
      <p className="text-lg">{formattedTime}</p>
      <p className="text-xs tracking-wider opacity-50">{formattedDate}</p>
    </div>
  );
}
