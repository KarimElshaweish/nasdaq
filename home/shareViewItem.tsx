import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
const CARD_SIZE = 180;
const IMAGE_SIZE = 50;
interface Props {
  companyName: string;
}
const ShareViewItem = ({ companyName }: Props) => {
  return (
    <View>
      <View style={styles.conainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/defaulListIcon.png")}
        />
        <Text style={styles.text} numberOfLines={2}>
          {companyName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    backgroundColor: Colors.secondary,
    width: CARD_SIZE,
    height: CARD_SIZE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Dimisions.primaryBorderSize,
    marginRight: Dimisions.primaryBorderSize,
    marginTop: Dimisions.primaryBorderSize,
  },
  text: {
    marginTop: Dimisions.primarySpacing,
    textAlign: "center",
    padding: Dimisions.primarySpacing,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

export default ShareViewItem;
