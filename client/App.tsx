import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/home";
import ManageListScreen from "./src/screens/manage-list";
import { Screens } from "./src/screens";
import { StyleSheet } from "react-native";
import HamburgerMenu from "./src/components/hamburger-menu";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={`${Screens.Home}`}
          component={HomeScreen}
          options={{
            headerTitle: (props) => null,
            headerStyle: styles.homeHeader,
          }}
        />
        <Stack.Screen
          name={`${Screens.CreateList}`}
          component={ManageListScreen}
          options={{
            headerTintColor: "#ff473a",
            headerLeft: (props) => null,
            headerRight: (props) => <HamburgerMenu />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: "#60c6ad",
    shadowOpacity: 0,
  },
});
