import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
const TopBanner = () => {
  return (
    <View style={styles.conainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/nasdaq_logo.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conainer: {
    backgroundColor: Colors.dark,
  },
  image: {
    width: 200,
    height: 50,
    marginHorizontal: Dimisions.primarySpacing,
  },
});
export default TopBanner;
