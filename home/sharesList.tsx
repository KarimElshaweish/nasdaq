import React, { useEffect } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import ShareViewItem from "./shareViewItem";
import { Colors } from "../branding";
import { useSelector } from "react-redux";
import { GlobalState } from "../types";
import { useLoadTicker } from "./useLoadTicker";
import { TickerResults } from "./state/types";

const renderItem:ListRenderItem<TickerResults> = ({item}) => <ShareViewItem companyName={item.name}/>

const SharesList = ()=>{
    const loadTicker = useLoadTicker();
    const ticker = useSelector((state:GlobalState) => state.ticker);
    useEffect(()=>{
        loadTicker();
    },[])
    console.log(`VIEW ticker ${JSON.stringify(ticker)}`);
    if(!ticker?.count){
        return null;
    }

    return <FlatList
      numColumns={2}  
      data={ticker.results}  
      renderItem={renderItem}
      contentContainerStyle={styles.ContentContainer}
      />
}
const styles = StyleSheet.create({
    ContentContainer:{
        alignItems:'center'
    }
})
export default SharesList;