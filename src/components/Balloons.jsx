import { useEffect, useState } from "react";

const Balloons = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100 + "vw",
          color: `hsl(${Math.random() * 360}, 100%, 60%)`,
          animationDuration: Math.random() * 5 + 3 + "s",
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: balloon.left,
            backgroundColor: balloon.color,
            animationDuration: balloon.animationDuration,
          }}
        />
      ))}
    </>
  );
};

export default Balloons;
