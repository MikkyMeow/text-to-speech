import { useState } from "react";
import { serials } from "../../text";
import { IEpisode, ISerial, ISubtitle, TEpisodes } from "../../text/types";

interface IProps {
  setSubtitles: (subtitles: ISubtitle[]) => void;
  setEpisodeName: (name: string) => void;
}

export const SerialsList: React.FC<IProps> = ({
  setSubtitles,
  setEpisodeName,
}) => {
  const [serial, setSerial] = useState<ISerial | null>(null);
  const [season, setSeason] = useState<TEpisodes | null>(null);
  const [seasonNumber, setSeasonNumber] = useState(0);
  const [episode, _setEpisode] = useState<IEpisode | null>(null);

  return (
    <div>
      <h2>{`${serial?.name || ""} ${(serial?.name && "/") || ""} ${
        seasonNumber || ""
      } ${(seasonNumber && "/") || ""} ${episode?.name || ""}`}</h2>
      {!serial
        ? Object.entries(serials).map(([key, value]) => (
            // @ts-ignore
            <p key={key} onClick={() => setSerial(serials[key])}>
              {value.name}
            </p>
          ))
        : !season
        ? Object.entries(serial.seasons).map(([key, value], index) => (
            <p
              key={key}
              onClick={() => {
                setSeason(value);
                setSeasonNumber(index + 1);
              }}
            >
              {key}
            </p>
          ))
        : Object.entries(season).map(([key, value]) => (
            <p
              key={key}
              onClick={() => {
                _setEpisode(value);
                setSubtitles(value.subtitles);
                setEpisodeName(
                  `${serial.name} / Season ${seasonNumber} / ${value.name}`
                );
              }}
            >
              {value.name}
            </p>
          ))}
    </div>
  );
};
