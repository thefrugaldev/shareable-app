import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import HomeScreen from "./src/screens/home";
import ManageListScreen from "./src/screens/manage-list";
import { Screens } from "./src/screens";
import HamburgerMenu from "./src/components/hamburger-menu";
import Login from "./src/screens/login";
import Register from "./src/screens/register";

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
        <Stack.Screen name={`${Screens.Login}`} component={Login} />
        <Stack.Screen name={`${Screens.Register}`} component={Register} />
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
