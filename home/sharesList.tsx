import React, { useEffect } from "react";
import { FlatList, ListRenderItem, StyleSheet,ActivityIndicator } from "react-native";
import ShareViewItem from "./shareViewItem";
import { useLoadMore, useLoadTicker, useSelectTciker } from "./hooks";
import { TickerResult } from "./state/types";

const renderItem:ListRenderItem<TickerResult> = ({item}) => <ShareViewItem companyName={item.name}/>
const SharesList = ()=>{
    const loadTicker = useLoadTicker();
    const loadMore = useLoadMore();
    const {count, next_url,results, isloading } = useSelectTciker();
    console.log(results);
    const endReached = () => loadMore(next_url);
    useEffect(()=>{
        loadTicker();
    },[])
    return <>
    <FlatList
      numColumns={2}  
      data={results}  
      renderItem={renderItem}
      contentContainerStyle={styles.ContentContainer}
      onEndReached={endReached}
      />
      {isloading? <ActivityIndicator />: null}
    </>
}
const styles = StyleSheet.create({
    ContentContainer:{
        alignItems:'center'
    }
})
export default SharesList;