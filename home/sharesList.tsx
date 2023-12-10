import React, { useEffect } from "react";
import {
  FlatList,
  type ListRenderItem,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import ShareViewItem from "./shareViewItem";
import { useLoadMore, useLoadTicker, useSelectTciker } from "./hooks";
import { type TickerResult } from "./state/types";

const renderItem: ListRenderItem<TickerResult> = ({ item }) => (
  <ShareViewItem companyName={item.name} />
);
const SharesList = () => {
  const loadTicker = useLoadTicker();
  const loadMore = useLoadMore();
  const { nextUrl, results, isloading } = useSelectTciker();
  console.log(results);
  const endReached = () => {
    loadMore(nextUrl);
  };
  useEffect(() => {
    loadTicker();
  }, []);
  return (
    <>
      <FlatList
        numColumns={2}
        data={results}
        renderItem={renderItem}
        contentContainerStyle={styles.ContentContainer}
        onEndReached={endReached}
      />
      {isloading ? <ActivityIndicator /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  ContentContainer: {
    alignItems: "center",
  },
});
export default SharesList;
