import { useEffect, useState } from "react";
import { ISubtitle } from "../../text/types";

const synth = window.speechSynthesis;

const getHash = () => (Math.random() + 1).toString(36).substring(7);

interface IProps {
  subtitles: ISubtitle[];
}

export const Player: React.FC<IProps> = ({ subtitles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [hash, setHash] = useState<string | null>(null);

  const play = () => {
    const eng = new SpeechSynthesisUtterance(subtitles[currentIndex].eng);
    const rus = new SpeechSynthesisUtterance(subtitles[currentIndex].rus);
    rus.lang = "ru";
    synth.speak(eng);
    synth.speak(rus);
    rus.addEventListener("end", () => {
      if (currentIndex < subtitles.length - 1) {
        setHash(getHash());
      } else {
        pause();
      }
    });
  };

  useEffect(() => {
    if (hash) {
      setCurrentIndex(currentIndex + 1);
      play();
    }
    // eslint-disable-next-line
  }, [hash]);

  const pause = () => {
    setHash(null);
    setCurrentIndex(currentIndex - 1);
    synth.cancel();
  };

  return (
    <div>
      <p>{subtitles[currentIndex ? currentIndex - 1 : currentIndex].eng}</p>
      <p>{subtitles[currentIndex ? currentIndex - 1 : currentIndex].rus}</p>
      <input
        type="range"
        value={currentIndex}
        min={0}
        max={subtitles.length}
        onChange={(e) => setCurrentIndex(Number(e.target.value))}
      />
      <button
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        prev
      </button>
      <button onClick={() => (hash ? pause() : setHash(getHash()))}>
        {hash ? "pause" : "play"}
      </button>
      <button
        disabled={currentIndex === subtitles.length - 1}
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        next
      </button>
    </div>
  );
};
