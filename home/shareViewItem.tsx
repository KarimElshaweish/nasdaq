import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
const CARD_SIZE = 150;
const IMAGE_SIZE = 50;
const ShareViewItem = ()=>{
    return(
        <View>
      <View style={styles.conainer}>
        <Image height={IMAGE_SIZE} width={IMAGE_SIZE} source={{uri:"https://cdn.freebiesupply.com/logos/large/2x/tesla-motors-logo-png-transparent.png"}}/>
    <Text style={styles.text} numberOfLines={1}>
        Company Name
    </Text>
  </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conainer:{
        backgroundColor:Colors.secondary,
        width:CARD_SIZE,
        height:CARD_SIZE,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Dimisions.primaryBorderSize,
        marginRight:Dimisions.primaryBorderSize,
        marginTop:Dimisions.primaryBorderSize,
    },
    text:{
        marginTop:Dimisions.primarySpacing
    }
});

export default ShareViewItem;