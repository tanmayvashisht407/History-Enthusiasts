import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

   render() {
    let story = this.state.story_data;
    console.log(story)
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let images = {
        image_1: require("../assets/National.jpg"),
        image_2: require("../assets/Globalworld.jpg"),
        image_3: require("../assets/age_in.jpeg"),
        image_4: require("../assets/image4.jpg"),
        
      };
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("StoryScreen", 
            {
              story: this.props.story
            })
          }
        >
        <SafeAreaView style={styles.droidSafeArea} />
          <View
            style={
              this.state.light_theme
                ? styles.cardContainerLight
                : styles.cardContainer
            }
          >
             <Image source={images[this.props.story.preview_image]}
            style={styles.storyImage}/>

         <View style={styles.titleContainer}>
              <Text
                style={
                  this.state.light_theme
                    ? styles.storyTitleTextLight
                    : styles.storyTitleText
                }
              >
                {this.props.story.title}
              </Text>
              <Text
                style={
                  this.state.light_theme
                    ? styles.storyAuthorTextLight
                    : styles.storyAuthorText
                }
              >
                {this.props.story.author}
              </Text>
              <Text
                style={
                  this.state.light_theme
                    ? styles.descriptionTextLight
                    : styles.descriptionText
                }
              >
                {this.props.story.description}
              </Text>
            </View>

            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons
                  name={"heart"}
                  size={RFValue(30)}
                  color={this.state.light_theme ? "black" : "white"}
                />
                <Text
                  style={
                    this.state.light_theme
                      ? styles.likeTextLight
                      : styles.likeText
                  }
                >
                  More
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}
const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  cardContainerLight: {
    margin: RFValue(13),

    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white"
  },
  storyTitleTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "black"
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  },
  storyAuthorTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black"
  },
  descriptionContainer: {
    marginTop: RFValue(5)
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "white"
  },
  descriptionTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "black"
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  likeTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});