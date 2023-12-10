import { Resource } from "../types";
import { BASE_URL } from "@env";
import computeUrl from "./computeUrl";

export default Object.freeze({
  [Resource.TICKERS]: computeUrl(`${BASE_URL}tickers?active=true`),
  [Resource.SEARCH]: (query: string) =>
    computeUrl(`${BASE_URL}tickers?search=${query}&active=true`),
});
