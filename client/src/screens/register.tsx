import React from "react";
import { View, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Screens } from ".";

const Register = () => {
  const navigator = useNavigation();

  return (
    <View>
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Text>
        Already have an account?{" "}
        <Text onPress={() => navigator.navigate(Screens.Login)}>Login</Text>
      </Text>
    </View>
  );
};

export default Register;
