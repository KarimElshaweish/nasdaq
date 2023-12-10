import { Ticker } from "./types"

const initialState = {
    ticker:null,
    loading:true
}
export enum Actions {
  GET_TICKER = 'GET/TICKER ',
}
interface GetAction {
  type : Actions.GET_TICKER
  loading:boolean,
  count:number;
  ticker:Ticker
}
type TickerActions = GetAction
export default (state = initialState, action:TickerActions) =>{

    switch(action.type){

        case Actions.GET_TICKER:
          console.log(action.ticker.count);
        return {
            ...state,
            count:action.ticker.count,
            results:action.ticker.results,
            nextUrl:action.ticker.next_url,
            loading:false,
        }
        default: return state
    }

}
