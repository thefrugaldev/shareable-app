import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/home";
import CreateListScreen from "./src/screens/list-create";
import { Screens } from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={`${Screens.Home}`} component={HomeScreen} />
        <Stack.Screen
          name={`${Screens.CreateList}`}
          component={CreateListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
