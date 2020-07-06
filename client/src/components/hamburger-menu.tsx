import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import HamburgerMenuSvg from "../../assets/svg/hamburger-menu";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const HamburgerMenu = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer);
        }}
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
