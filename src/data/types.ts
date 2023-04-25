export interface IMovie {
  [key: string]: {
    [key: string]: {
      eng: string;
      rus: string;
    }[];
  };
}
