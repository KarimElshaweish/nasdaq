import React from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import ShareViewItem from "./shareViewItem";
import { Colors } from "../branding";
interface Share{
    logo:string;
    title:string;
}
const renderItem:ListRenderItem<Share> = ({item:Share}) => <ShareViewItem/>
const MOCK_DATA:Share[] = [
    {
        logo:'https://cdn.freebiesupply.com/logos/large/2x/tesla-motors-logo-png-transparent.png',
        title:'Company Name'
    },
    {
        logo:'https://cdn.freebiesupply.com/logos/large/2x/tesla-motors-logo-png-transparent.png',
        title:'Company Name'
    },
    {
        logo:'https://cdn.freebiesupply.com/logos/large/2x/tesla-motors-logo-png-transparent.png',
        title:'Company Name'
    },
    {
        logo:'https://cdn.freebiesupply.com/logos/large/2x/tesla-motors-logo-png-transparent.png',
        title:'Company Name'
    }
]
const SharesList = ()=>{
    return <FlatList
      numColumns={2}  
      data={MOCK_DATA}  
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