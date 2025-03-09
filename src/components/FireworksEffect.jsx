import { Fireworks } from "fireworks-js";
import { useEffect, useRef } from "react";

function FireworksEffect() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const fireworks = new Fireworks(ref.current, {
        rocketsPoint: 50,
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
      });

      fireworks.start();

      return () => fireworks.stop();
    }
  }, []);

  return <div ref={ref} className="fireworks-container"></div>;
}

export default FireworksEffect;
