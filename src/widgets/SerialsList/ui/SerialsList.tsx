import { useState } from "react";
import styles from "./SerialsList.module.css";
import { IEpisode, ISerial, TEpisodes } from "text/types";
import { serials } from "text";
import { SerialItem } from "shared/ui/SerialItem/ui/SerialItem";

interface IProps {
  setSubtitles: (subtitles: IEpisode) => void;
}

export const SerialsList: React.FC<IProps> = ({ setSubtitles }) => {
  const [serial, setSerial] = useState<ISerial | null>(null);
  const [season, setSeason] = useState<TEpisodes | null>(null);
  const [seasonNumber, setSeasonNumber] = useState(0);
  const [episode, setEpisode] = useState<IEpisode | null>(null);

  return (
    <div className={styles.root}>
      <h2>{`${serial?.name || "Choose a series"} ${
        (serial?.name && "/") || ""
      } ${seasonNumber || ""} ${(seasonNumber && "/") || ""} ${
        episode?.name || ""
      }`}</h2>
      {!serial
        ? Object.entries(serials).map(([key, value]) => (
            // @ts-ignore
            <SerialItem key={key} onClick={() => setSerial(serials[key])}>
              {value.name}
            </SerialItem>
          ))
        : !season
        ? Object.entries(serial.seasons).map(([key, value], index) => (
            <SerialItem
              key={key}
              onClick={() => {
                setSeason(value);
                setSeasonNumber(index + 1);
              }}
            >
              {key}
            </SerialItem>
          ))
        : Object.entries(season).map(([key, value]) => (
            <SerialItem
              key={key}
              onClick={() => {
                setEpisode(value);
                setSubtitles(value);
              }}
            >
              {value.name}
            </SerialItem>
          ))}
    </div>
  );
};
