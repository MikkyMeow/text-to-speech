import { ISerial } from "../types";
import { episode1 } from "./episode1";
import { episode2 } from "./episode2";
import { episode3 } from "./episode3";
import { episode4 } from "./episode4";
import { episode5 } from "./episode5";
import { episode6 } from "./episode6";
import { episode7 } from "./episode7";
import { episode8 } from "./episode8";
import { episode9 } from "./episode9";
import { episode10 } from "./episode10";
import { episode11 } from "./episode11";
import { episode12 } from "./episode12";
import { episode13 } from "./episode13";
import { episode14 } from "./episode14";
import { episode15 } from "./episode15";
import { episode16 } from "./episode16";
import { episode17 } from "./episode17";
import { episode18 } from "./episode18";
import { episode19 } from "./episode19";
import { episode20 } from "./episode20";
import { episode21 } from "./episode21";
import { episode22 } from "./episode22";
import { episode23 } from "./episode23";

export const friends: ISerial = {
  name: "Friends",
  description:
    "Жизнь, любовь и смех шестерых молодых друзей, живущих на Манхэттене.",
  seasons: {
    season1: {
      episode1: {
        subtitles: episode1,
        name: "The One Where Monica Gets a Roommate",
      },
      episode2: {
        subtitles: episode2,
        name: "The One with the Sonogram at the End",
      },
      episode3: { subtitles: episode3, name: "The One with the Thumb" },
      episode4: {
        subtitles: episode4,
        name: "The One with George Stephanopoulos",
      },
      episode5: {
        subtitles: episode5,
        name: "The One with the East German Laundry Detergent",
      },
      episode6: { subtitles: episode6, name: "The One with the Butt" },
      episode7: { subtitles: episode7, name: "The One with the Blackout" },
      episode8: { subtitles: episode8, name: "The One Where Nana Dies Twice" },
      episode9: {
        subtitles: episode9,
        name: "The One Where Underdog Gets Away",
      },
      episode10: { subtitles: episode10, name: "The One with the Monkey" },
      episode11: { subtitles: episode11, name: "The One with Mrs. Bing" },
      episode12: {
        subtitles: episode12,
        name: "The One with the Dozen Lasagnas",
      },
      episode13: { subtitles: episode13, name: "The One with the Boobies" },
      episode14: {
        subtitles: episode14,
        name: "The One with the Candy Hearts",
      },
      episode15: { subtitles: episode15, name: "The One with the Stoned Guy" },
      episode16: { subtitles: episode16, name: "-17 The One with Two Parts" },
      episode17: { subtitles: episode17, name: "The One with All the Poker" },
      episode18: {
        subtitles: episode18,
        name: "The One Where the Monkey Gets Away",
      },
      episode19: {
        subtitles: episode19,
        name: "The One with the Evil Orthodontist",
      },
      episode20: { subtitles: episode20, name: "The One with the Fake Monica" },
      episode21: { subtitles: episode21, name: "The One with the Ick Factor" },
      episode22: { subtitles: episode22, name: "The One with the Birth" },
      episode23: {
        subtitles: episode23,
        name: "The One Where Rachel Finds Out",
      },
    },
  },
};
