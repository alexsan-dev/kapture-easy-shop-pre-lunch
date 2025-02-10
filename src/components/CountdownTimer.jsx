import { useState, useEffect } from "react";

import Icon from "@mdi/react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("March 10, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heures: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      secondes: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isExpanded, setIsExpanded] = useState(true); // Etat pour gérer l'expansion
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Écouteur pour le scroll
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrollPercentage);

      // Quand l'utilisateur défile de 10%, on rétracte
      if (scrollPercentage >= 10) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsExpanded((prevState) => !prevState); // Toggle l'état de l'expansion au clic
  };

  return (
    
    <div
    className={`fixed bottom-0 z-50 flex justify-center transition-all ${
      isExpanded ? "p-4 scale-100 left-0 right-0" : "scale-50"
    }`}
  >
    <div
      className="flex justify-center gap-1.5 md:space-x-4 text-purple-700 cursor-pointer"
      onClick={handleClick}
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className={`bg-purple-300/50 ${
            isExpanded ? "rounded-lg p-2 md:p-6 text-center" : ""
          } ${
            isExpanded && unit === "secondes" ? "hidden md:flex" : ""
          } ${
            !isExpanded && unit !== "jours" ? "hidden" : "rounded-full h-24 flex flex-col items-center justify-center"
          } backdrop-blur-sm bg-opacity-20 transition-transform w-1/3 md:w-1/5 flex-grow sm:w-24 aspect-square sm:h-32 md:h-24`}
        >
          <div className="text-4xl md:text-5xl font-bold">{value}</div>
          <div className="text-lg md:text-xl mt-2 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default CountdownTimer;
