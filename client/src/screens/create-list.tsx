import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import ListItemComponent from "../components/list-item";
import ListHeaderComponent from "../components/list-header";

const CreateListScreen = () => {
  const staticList = [
    {
      name: "Celery",
      id: "1",
      quantity: 2,
      imageSource: "",
    },
    {
      name: "Carrots",
      id: "2",
      quantity: 1,
      imageSource: "",
    },
    {
      name: "Peanut Butter",
      id: "3",
      quantity: 1,
      imageSource: "",
    },
    {
      name: "Pasta",
      id: "4",
      quantity: 1,
      imageSource: "",
    },
    {
      name: "Chicken",
      id: "5",
      quantity: 1,
      imageSource: "",
    },
  ];

  return (
    <FlatList
      data={staticList}
      renderItem={({ item }) => <ListItemComponent item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
      ListHeaderComponent={ListHeaderComponent}
    >
      <Text>This is part of a list</Text>
    </FlatList>
  );
};

export default CreateListScreen;

const styles = StyleSheet.create({
  list: {},
  listContainer: {
    margin: 40,
  },
});
