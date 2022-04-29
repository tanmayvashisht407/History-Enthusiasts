import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";


export default class Feed extends Component {
  

render() {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
            <Text style={{color:"white",fontSize:30,marginLeft:70,fontFamily: "Bubblegum-Sans"}}> 
              Historic Enthusiast
            </Text>
            <View style={{marginTop:50,marginLeft:25}}>
             <Image
              source={require("../assets/front_page.png")}
              style={{width:300,height:350,justifyContent:"center",alignItems:"center",resizeMoe:"center"}}
            ></Image>
            <Text style={{color:"white",fontSize:30,marginLeft:30}}>
           Developer: Tanmay
            </Text>
            </View>
          </View>
         
        
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.80,
    flexDirection: "row"
  },
  appIcon: {
    
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    resizeMode:"contain"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 1,
    width:"100%",
    height:"100%",
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
 
});
