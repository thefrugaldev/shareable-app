import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
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
});
