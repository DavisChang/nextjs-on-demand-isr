export type Color = "red" | "blue" | "green";

export interface GlobalState {
  language: string;
  country: string;
}

export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
