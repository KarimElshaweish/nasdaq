import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./state/reducer";
import { Urls, computeUrl } from "../http";
import { type GlobalState } from "../types";

export const useSelectTciker = () =>
  useSelector((state: GlobalState) => state.ticker);
export const useLoadTicker = () => {
  const dispatch = useDispatch();
  return async (url: string = computeUrl(Urls.tickers)) => {
    await axios
      .get(url)
      .then((res) => {
        dispatch({
          type: Actions.GET_TICKER,
          ticker: res.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: Actions.SET_ERROR,
        });
      });
  };
};

export const useLoadMore = () => {
  const dispatch = useDispatch();
  const loadTicker = useLoadTicker();
  return async (url: string) => {
    if (url !== null && url !== undefined) {
      dispatch({
        type: Actions.SET_LOADING,
      });
      await loadTicker(computeUrl(url));
    }
  };
};
