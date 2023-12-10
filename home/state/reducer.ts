import { type Ticker, type TickerResult } from "./types";

const initialState = {
  ticker: null,
  isloading: true,
  count: 0,
  results: [] as TickerResult[],
  error: false,
};
export enum Actions {
  GET_TICKER = "GET/TICKER ",
  SET_LOADING = "SET/LOADING",
  SET_ERROR = "ERROR/SET_ERROR",
}
interface GetAction {
  type: Actions.GET_TICKER;
  isloading: boolean;
  count: number;
  ticker: Ticker;
}
interface SetLoadingAction {
  type: Actions.SET_LOADING;
}
interface SetErrorAction {
  type: Actions.SET_ERROR;
}

type TickerActions = GetAction | SetLoadingAction | SetErrorAction;

export default (state = initialState, action: TickerActions) => {
  switch (action.type) {
    case Actions.GET_TICKER:
      console.log(action.ticker.next_url);
      return {
        ...state,
        count: state.count + action.ticker.count,
        results: state.results.concat(action.ticker.results),
        nextUrl: action.ticker.next_url,
        isloading: false,
        error: false,
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        error: false,
        isloading: true,
      };
    case Actions.SET_ERROR:
      return {
        error: true,
      };
    default:
      return state;
  }
};
