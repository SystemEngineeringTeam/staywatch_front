type Time = `${number}:${number}`;
export type Stayers = {
  stayers: {
    name: string;
    grade: string;
    startTime: Time;
  }[];
};
