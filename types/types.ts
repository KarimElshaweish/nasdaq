import { type Ticker } from "../home/state/types";

export enum ResourcesNamesList {
  HOME = "home",
  DETAILS = "details",
}
export interface RootStackParamList {
  [ResourcesNamesList.DETAILS]: undefined;
}
export enum Resource {
  TICKERS = "tickers",
}
export interface GlobalState {
  ticker: Ticker;
}
