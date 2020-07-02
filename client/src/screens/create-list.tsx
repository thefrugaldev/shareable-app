import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import ListItemModel from "../components/list-item";
import ListHeader from "../components/list-header";
import { useNavigationState } from "@react-navigation/native";

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

  const nav = useNavigationState((state) => {
    console.log(state);
  });

  return (
    <FlatList
      data={staticList}
      renderItem={({ item }) => <ListItemModel item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
      ListHeaderComponent={ListHeader}
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
