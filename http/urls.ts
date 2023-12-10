import { Resource } from "../types";
import { BASE_URL } from "@env";

export default Object.freeze({
  [Resource.TICKERS]: `${BASE_URL}tickers?active=true`,
});
