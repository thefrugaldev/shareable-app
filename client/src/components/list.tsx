import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import ListItem from "../components/list-item";
import ListHeader from "../components/list-header";
import { db } from "../lib/firebase";
import ListItemModel, { NewListItem } from "../models/ListItem";

const List = () => {
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

  const listItemsRef = db.ref();
  const [listItems, setListItems] = useState<ListItemModel[]>();
  const [newListItem, setNewListItem] = useState(NewListItem);

  useEffect(() => {
    listItemsRef.on("value", (snapShot) => {
      let items: ListItemModel[] = [];
      snapShot.forEach((child) => {
        items.push({
          id: child.key, // TODO: use GUID instead
          name: child.val().name,
          quantity: child.val().quantity,
          imageSource: child.val().imageSource,
        });
      });

      setListItems(items);
    });
  }, []);

  const handleUpdate = (item: ListItemModel) => {
    console.log(`Updating item: `, item);

    item.id
      ? listItemsRef.child(item.id).update(item)
      : listItemsRef.push(item);

    // setNewListItem(NewListItem);
  };

  return (
    <>
      <FlatList
        data={listItems}
        // extraData={listItems}
        renderItem={({ item }) => (
          <ListItem onUpdate={handleUpdate} item={item} />
        )}
        keyExtractor={(item) => item.id || ""} // TODO: refactor
        contentContainerStyle={styles.listContainer}
        style={styles.list}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={
          <>
            <ListItem onUpdate={handleUpdate} item={newListItem} />
          </>
        }
      ></FlatList>
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {},
  listContainer: {
    margin: 40,
  },
});
