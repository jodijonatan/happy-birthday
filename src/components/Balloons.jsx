import { useEffect, useState } from "react";

const Balloons = () => {
  console.log("Balloons component mounted!"); // Tambahkan ini

  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon = {
        id: Math.random(),
        left: Math.random() * 100 + "vw",
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        animationDuration: Math.random() * 5 + 3 + "s",
      };

      console.log("New Balloon:", newBalloon); // Cek warna di console

      setBalloons((prev) => [...prev, newBalloon]);
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
            backgroundColor: balloon.color, // Pastikan ini diterapkan
            animationDuration: balloon.animationDuration,
          }}
        />
      ))}
    </>
  );
};

export default Balloons;
