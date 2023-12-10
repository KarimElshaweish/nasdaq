import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./state/reducer";
import { Urls, computeUrl } from "../http";
import { GlobalState } from "../types";

export const useSelectTciker = ()=>useSelector((state: GlobalState) => state.ticker);
export const useLoadTicker =()=>{
    const dispatch = useDispatch();
    return (url: string = computeUrl(Urls.tickers))=>(
        axios.get(url)
        .then((res)=> {
            dispatch({
                type:Actions.GET_TICKER,
                ticker:res.data,
            })
        })       
    )
}

export const useLoadMore = ()=>{
    const dispatch = useDispatch();
    const loadTicker = useLoadTicker();
    return (url: string)=>{
        if(url){
            dispatch({
                type:Actions.SET_LOADING
            })
            loadTicker(computeUrl(url))
        }
    }
}