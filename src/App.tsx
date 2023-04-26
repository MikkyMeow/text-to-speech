import { theWalkingDead } from "data/theWalkingDead";
import React, { useState } from "react";
import "./App.css";

const synth = window.speechSynthesis;

export const App = () => {
  const episode = theWalkingDead.season1.episode1;
  const [progress, setProgress] = useState(0);
  const [isPlayed, setIsPlayed] = useState(false);
  const [rate, setRate] = useState(1);
  const [rate2, setRate2] = useState(1);

  const play = () => {
    setIsPlayed(true);
    for (let i = progress; i < episode.length; i++) {
      const eng = new SpeechSynthesisUtterance(`${episode[i].eng}`);
      const rus = new SpeechSynthesisUtterance(`${episode[i].rus}`);
      eng.lang = "en";
      rus.lang = "ru";
      eng.rate = rate;
      synth.speak(eng);
      synth.speak(rus);
      rus.addEventListener("end", (e) => {
        const next = document.getElementById("next");
        if (next) next.click();
      });
    }
  };

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
            <button disabled={isPlayed} onClick={() => setRate(rate - 0.1)}>
              -0.1
            </button>
            <p>{rate.toFixed(1)}</p>
            <button disabled={isPlayed} onClick={() => setRate(rate + 0.1)}>
              +0.1
            </button>
          </div>
          <div className="flex">
            <button disabled={isPlayed} onClick={() => setRate2(rate2 - 0.1)}>
              -0.1
            </button>
            <p>{rate2.toFixed(1)}</p>
            <button disabled={isPlayed} onClick={() => setRate2(rate2 + 0.1)}>
              +0.1
            </button>
          </div>
        </div>
        <div className="flex center">
          <span>{progress}</span>
          <input
            type="range"
            min={0}
            max={episode.length}
            value={progress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProgress(+e.target.value)
            }
          />
          <span>{episode.length}</span>
        </div>
        <div className="flex row center gap size20">
          <button disabled={isPlayed} onClick={() => setProgress(progress - 1)}>
            Prev
          </button>
          <button disabled={isPlayed} onClick={() => play()}>
            Play
          </button>
          <button onClick={() => stop()}>Stop</button>
          <button
            // disabled={isPlayed}
            id="next"
            onClick={() => setProgress(progress + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
