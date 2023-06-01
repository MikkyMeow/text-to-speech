import { useEffect, useState } from "react";
import { IEpisode } from "text/types";
import styles from "./Player.module.css";
import { Controls } from "widgets/Controls";
import { getHash } from "shared/helpers/getHash";

const synth = window.speechSynthesis;

interface IProps {
  episode: IEpisode;
}

export const Player: React.FC<IProps> = ({ episode }) => {
  const { subtitles, name } = episode;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [showRussian, setShowRussian] = useState(true);
  const [isBreath, setIsBreath] = useState(true);

  const [hash, setHash] = useState<string | null>(null);

  const play = () => {
    const eng = new SpeechSynthesisUtterance(subtitles[currentIndex].eng);
    const breath = new SpeechSynthesisUtterance(subtitles[currentIndex].eng);
    const rus = new SpeechSynthesisUtterance(subtitles[currentIndex].rus);
    const end = new SpeechSynthesisUtterance("");

    eng.lang = "en";
    breath.volume = 0;
    rus.lang = "ru";

    synth.speak(eng);
    isBreath && synth.speak(breath);
    showRussian && synth.speak(rus);
    synth.speak(end);
    end.addEventListener("end", () => {
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
    <div className={styles.root}>
      <h2>{name}</h2>
      <div>
        <p style={{ fontSize }}>
          {subtitles[currentIndex ? currentIndex - 1 : currentIndex].eng}
        </p>
        {showRussian && (
          <p style={{ fontSize }}>
            {subtitles[currentIndex ? currentIndex - 1 : currentIndex].rus}
          </p>
        )}
      </div>
      <Controls
        value={currentIndex}
        max={subtitles.length}
        setValue={setCurrentIndex}
        pause={pause}
        setHash={() => setHash(getHash())}
        setFontSize={(str) =>
          str === "dec" ? setFontSize(fontSize - 1) : setFontSize(fontSize + 1)
        }
        showRussian={() => setShowRussian((prev) => !prev)}
        setBreath={() => setIsBreath((prev) => !prev)}
      />
    </div>
  );
};
