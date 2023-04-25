import { theWalkingDead } from "data/theWalkingDead";
import React, { useRef, useState } from "react";
import "./App.css";

const synth = window.speechSynthesis;

export const App = () => {
  const episode = theWalkingDead.season1.episode1;
  const [progress, setProgress] = useState(0);
  const ref = useRef(progress);
  const [isPlayed, setIsPlayed] = useState(false);
  const [rate, setRate] = useState(1);
  const [rate2, setRate2] = useState(1);

  const play = () => {
    setIsPlayed(true);
    for (let i = progress; i < episode.length; i++) {
      const eng = new SpeechSynthesisUtterance(episode[i].eng);
      const rus = new SpeechSynthesisUtterance(episode[i].rus);
      const eng2 = new SpeechSynthesisUtterance(episode[i].eng);
      eng.lang = "en";
      rus.lang = "ru";
      eng2.lang = "en";
      eng.rate = rate;
      eng2.rate = rate2;
      synth.speak(eng);
      synth.speak(rus);
      synth.speak(eng2);
      rus.addEventListener("end", (e) => {
        const next = document.getElementById("next");
        if (next) next.click();
      });
    }
  };
  console.log(progress);

  const stop = () => {
    synth.cancel();
    setIsPlayed(false);
  };

  return (
    <div className="root flex col">
      <div className="flex col center">
        <p>{episode[progress].eng}</p>
        <p>{episode[progress].rus}</p>
      </div>
      <div className="flex col toBottom">
        <div className="flex row center gap">
          <div className="flex">
            <button onClick={() => setRate(rate - 0.1)}>-0.1</button>
            <p>{rate.toFixed(1)}</p>
            <button onClick={() => setRate(rate + 0.1)}>+0.1</button>
          </div>
          <div className="flex">
            <button onClick={() => setRate2(rate2 - 0.1)}>-0.1</button>
            <p>{rate2.toFixed(1)}</p>
            <button onClick={() => setRate2(rate2 + 0.1)}>+0.1</button>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max={episode.length}
          value={progress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProgress(+e.target.value)
          }
        />
        <div className="flex row center gap size20">
          <button onClick={() => setProgress(progress - 1)}>Prev</button>
          <button onClick={() => play()}>Play</button>
          <button onClick={() => stop()}>Stop</button>
          <button id="next" onClick={() => setProgress(progress + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
