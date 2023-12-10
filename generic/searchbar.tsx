import React from "react";
import { Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Colors, Dimisions } from "../branding";
import diminsion from "../branding/diminsion";
import { useSearch } from "../home/hooks";

const SearchBar = () => {
  const search = useSearch();
  const onChangeText = (text: string) => {
    if (text.length > 2) {
      search(text);
    }
  };
  return (
    <Input
      style={styles.contianer}
      textStyle={styles.text}
      placeholder="Search for stokcs"
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  contianer: {
    borderRadius: Dimisions.primarySpacing * 2,
    backgroundColor: Colors.secondary,
    borderColor: Colors.grey,
    margin: diminsion.primarySpacing,
  },
  text: {
    padding: Dimisions.primarySpacing,
  },
});
export default SearchBar;
