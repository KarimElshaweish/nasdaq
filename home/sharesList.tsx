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
import { Text } from "@ui-kitten/components";

const renderItem: ListRenderItem<TickerResult> = ({ item }) => (
  <ShareViewItem companyName={item.name} />
);
const SharesList = () => {
  const loadTicker = useLoadTicker();
  const loadMore = useLoadMore();
  const { nextUrl, results, isloading, errorMessage, count } =
    useSelectTciker();
  console.log(results);
  const endReached = () => {
    loadMore(nextUrl);
  };
  useEffect(() => {
    loadTicker();
  }, []);
  if (errorMessage) {
    <Text>{errorMessage}</Text>;
  }
  if (!count) {
    <Text>No Results</Text>;
  }
  return (
    <>
      <FlatList
        numColumns={2}
        data={results}
        renderItem={renderItem}
        contentContainerStyle={styles.ContentContainer}
        onEndReached={endReached}
        testID="tickerList"
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
