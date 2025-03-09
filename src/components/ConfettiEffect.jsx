import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 160,
    });
  };

  return <button onClick={fireConfetti}>🎉 Tembakkan Confetti</button>;
};

export default ConfettiEffect;
