import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharesList, TopBanner } from "../home";
import SearchBar from "../home/searchbar";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <TopBanner />
      <SearchBar />
      <SharesList />
    </SafeAreaView>
  );
};

export default HomeScreen;
