import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListHeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Item</Text>
      <Text style={styles.headerText}>Quantity</Text>
    </View>
  );
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "grey",
    fontSize: 12,
  },
});
