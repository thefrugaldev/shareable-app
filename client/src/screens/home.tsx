import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { NavigationScreenProp } from "react-navigation";

import banner from "../../assets/home-screen-banner.png";
import { Screens } from ".";

const HomeScreen: React.FC<{
  navigation: NavigationScreenProp<any, any>;
}> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Share Notes and Lists</Text>
      <Text style={styles.subtext}>No login required!</Text>
      <Image source={banner as ImageSourcePropType} />
      <TouchableOpacity
        onPress={() => navigation.navigate(`${Screens.CreateList}`)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create a list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add notes</Text>
      </TouchableOpacity>
      <Text style={styles.disclaimerText}>
        Select one of the buttons above and start creating and sharing!
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60c6ad",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#FCFCFC",
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowOffset: {
      height: 2,
      width: 4,
    },
    shadowColor: "black",
    shadowRadius: 1,
    shadowOpacity: 0.25,
  },
  subtext: {
    color: "#ff473a",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#FF473A",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 42,
    width: 250,
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
  },
  disclaimerText: {
    color: "white",
    width: 250,
    paddingHorizontal: 10,
  },
});
