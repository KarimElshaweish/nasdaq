import { type Ticker, type TickerResult } from "./types";

const initialState = {
  ticker: null,
  isloading: true,
  count: 0,
  results: [] as TickerResult[],
  errorMessage: null,
  error: false,
};
export enum Actions {
  GET_TICKER = "GET/TICKER",
  SET_LOADING = "SET/LOADING",
  SEARCH = "SEARCH/QUERY",
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
interface SearchAction {
  type: Actions.SEARCH;
  isloading: boolean;
  count: number;
  ticker: Ticker;
}
type TickerActions =
  | GetAction
  | SetLoadingAction
  | SetErrorAction
  | SearchAction;

export default (state = initialState, action: TickerActions) => {
  switch (action.type) {
    case Actions.GET_TICKER:
      console.log(action.ticker.next_url);
      return {
        ...state,
        count: state.count + action.ticker.count,
        results: state.results.concat(action.ticker.results ?? []),
        nextUrl: action.ticker.next_url,
        action: Actions.GET_TICKER,
        isloading: false,
        error: false,
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        error: false,
        isloading: true,
        action: Actions.SET_LOADING,
      };
    case Actions.SEARCH:
      return {
        ...state,
        count: action.ticker.count,
        results: action.ticker.results,
        nextUrl: action.ticker.next_url,
        action: Actions.SEARCH,
        isloading: false,
        error: false,
      };
    case Actions.SET_ERROR:
      return {
        error: true,
        action: Actions.SET_ERROR,
        errorMessage: "somthing wrong",
      };
    default:
      return state;
  }
};
