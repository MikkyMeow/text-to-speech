import { FC, useState } from "react";
import styles from "./Controls.module.css";

interface IControlsProps {
  value: number;
  setValue: (value: number) => void;
  max: number;
  pause: () => void;
  setHash: () => void;
  setFontSize: (str: "dec" | "inc") => void;
  showRussian: () => void;
  setBreath: () => void;
}

export const Controls: FC<IControlsProps> = ({
  value,
  setValue,
  max,
  pause,
  setHash,
  setFontSize,
  showRussian,
  setBreath,
}) => {
  const [isPlayed, setIsPlayed] = useState(false);

  return (
    <div className={`${styles.root}`}>
      <div className={styles.fontSize}>
        Breath after english speech:
        <input type="checkbox" defaultChecked onChange={setBreath} />
      </div>
      <div className={styles.fontSize}>
        Show Russian:
        <input type="checkbox" defaultChecked onClick={showRussian} />
      </div>
      <div className={styles.fontSize}>
        Font Size:
        <button onClick={() => setFontSize("dec")}>-</button>
        <button onClick={() => setFontSize("inc")}>+</button>
      </div>
      <div>
        <div className={styles.values}>
          <span>{value}</span>
          <span>{max}</span>
        </div>
        <input
          className={styles.range}
          type="range"
          value={value}
          min={0}
          max={max}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
      <div className={styles.mainButtons}>
        <button disabled={value === 0} onClick={() => setValue(value - 1)}>
          prev
        </button>
        <button
          onClick={() => {
            if (isPlayed) {
              pause();
              setIsPlayed(false);
            } else {
              setHash();
              setIsPlayed(true);
            }
          }}
        >
          {isPlayed ? "pause" : "play"}
        </button>
        <button
          disabled={value === max - 1}
          onClick={() => setValue(value + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};
