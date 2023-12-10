import { Ticker, TickerResult } from "./types"

const initialState = {
    ticker:null,
    isloading:true,
    count: 0,
    results: [] as TickerResult[]
}
export enum Actions {
  GET_TICKER = 'GET/TICKER ',
  SET_LOADING = 'SET/LOADING',
}
interface GetAction {
  type : Actions.GET_TICKER
  isloading:boolean
  count:number
  ticker:Ticker
}
interface SetLoadingAction {
  type:Actions.SET_LOADING
}

type TickerActions = GetAction | SetLoadingAction
export default (state = initialState, action:TickerActions) =>{

    switch(action.type){
        case Actions.GET_TICKER:
          console.log(action.ticker.next_url);
        return {
            ...state,
            count:state.count + action.ticker.count,
            results:state.results.concat(action.ticker.results),
            next_url:action.ticker.next_url,
            isloading:false,
        };
        case Actions.SET_LOADING:
          return {
            ...state,
            isloading:true,
          };
        default: return state
    }

}
