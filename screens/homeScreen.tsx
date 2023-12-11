import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharesList } from "../home";
import SearchBar from "../home/searchbar";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SearchBar />
      <SharesList />
    </SafeAreaView>
  );
};

export default HomeScreen;
