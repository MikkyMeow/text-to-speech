import { useState } from "react";
import { IEpisode } from "../text/types";
import { Player } from "widgets/Player";
import { SerialsList } from "widgets/SerialsList";

function App() {
  const [episode, setEpisode] = useState<IEpisode | null>(null);

  return (
    <>
      {!episode ? (
        <SerialsList setSubtitles={setEpisode} />
      ) : (
        <>
          <Player episode={episode} />
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
