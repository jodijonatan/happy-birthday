import { useState, useRef, useEffect } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    console.log("Audio element:", audioRef.current);
    if (audioRef.current) {
      console.log("Audio can be played:", audioRef.current.readyState);
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.error("Playback error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-controller">
      <audio ref={audioRef} loop>
        <source src="/happy-birthday/HBDSound.mp3" type="audio/mp3" />
      </audio>
      <button onClick={toggleMusic}>
        {isPlaying ? "🔇 Stop Music" : "🎵 Play Music"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
