import React, { useState } from "react";
import "./App.css";
import { Player } from "./components/Player/Player";
import { ISubtitle } from "./text/types";
import { SerialsList } from "./components/SerialsList/SerialsList";

function App() {
  const [subtitles, setSubtitles] = useState<ISubtitle[] | null>(null);
  const [episodeName, setEpisodeName] = useState("");

  return (
    <>
      {!subtitles ? (
        <SerialsList
          setSubtitles={setSubtitles}
          setEpisodeName={setEpisodeName}
        />
      ) : (
        <>
          <h1>{episodeName}</h1>
          <Player subtitles={subtitles} />
        </>
      )}
    </>
  );
}

export default App;

// для преобразования титров с переводами в объект
// const engNodeList = document.querySelectorAll(".col-wordcontext");
// const rusNodeList = document.querySelectorAll(".table tr td:last-child");
// const result = [];

// for (let i = 0; i < engNodeList.length; i++) {
//   result.push({
//     eng: engNodeList[i].textContent.trim(),
//     rus: rusNodeList[i].textContent.slice(1).trim()
//   });
// }

// console.log(result);
