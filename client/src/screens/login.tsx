import React from "react";
import { View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Screens } from ".";

const Login = () => {
  const navigator = useNavigation();

  return (
    <View>
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Text>
        Don't have an account?{" "}
        <Text onPress={() => navigator.navigate(Screens.Register)}>
          Create one
        </Text>
      </Text>
    </View>
  );
};

export default Login;
