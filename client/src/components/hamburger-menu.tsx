import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import HamburgerMenuSvg from "../../assets/svg/hamburger-menu";

const HamburgerMenu = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => alert("menu pressed")} // TODO: need to createDrawerNavigator on react navigation
      >
        <HamburgerMenuSvg />
      </TouchableOpacity>
    </View>
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
