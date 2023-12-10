import { Ticker } from "../home/state/types";

export enum ResourcesNamesList {
  HOME='home',
  DETAILS = 'details'
}
export type RootStackParamList = {
  [ResourcesNamesList.DETAILS]: undefined;
};
export enum Resource {
  TICKERS = 'tickers',
}
export type GlobalState = {
  ticker:Ticker
}