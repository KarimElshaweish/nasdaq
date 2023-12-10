import axios from "axios";
import { useDispatch } from "react-redux";
import { Actions } from "./state/reducer";

export const useLoadTicker =()=>{
    const dispatch = useDispatch();
    
    return ()=>(
        axios.get('https://api.polygon.io/v3/reference/tickers?active=true&apiKey=kK9WzOvyNTFTfsKJYIuRYLA1n3G8NUrU')
        .then((res)=> {
            dispatch({
                type:Actions.GET_TICKER,
                ticker:res.data,
            })
        })       
    )
}