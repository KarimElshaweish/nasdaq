import { combineReducers } from "redux";
import { tickerReducer } from "../home";

export default combineReducers({
  ticker: tickerReducer,
});
