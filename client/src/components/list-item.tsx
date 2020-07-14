import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

import ListItemModel from "../models/ListItem";
import MinusSquareSvg from "../../assets/svg/minus-square";
import PlusSquareSvg from "../../assets/svg/plus-square";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

interface ListItemProps {
  item: ListItemModel;
  onUpdate: (item: ListItemModel) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onUpdate }) => {
  // const [quantity, setQuantity] = useState(item.quantity);
  // const [editableItem, setEditableItem] = useState(item);

  const incrementQuantity = () => {
    // TODO: Make these configurable later and add debounce
    // editableItem.quantity < 10
    //   ? setEditableItem((item) => ({ ...item, quantity: item.quantity + 1 }))
    //   : null;
  };

  const decrementQuantity = () => {
    // TODO: Make these configurable later and add debounce
    // editableItem.quantity > 0
    //   ? setEditableItem((item) => ({ ...item, quantity: item.quantity - 1 }))
    //   : null;
  };

  const updateListItem = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const updatedName = e.nativeEvent.text;

    console.log(item);

    if (item.name !== updatedName && updatedName != "") {
      onUpdate({ ...item, name: e.nativeEvent.text });
    }
  };

  return (
    <View style={styles.listItemContainer}>
      <TextInput
        style={styles.listItemText}
        onBlur={updateListItem}
        clearTextOnFocus={!item.id}
      >
        {item.name}
      </TextInput>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity}>
          <MinusSquareSvg />
        </TouchableOpacity>
        <Text style={styles.listItemText}>{item.quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity}>
          <PlusSquareSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 18,
    minWidth: 20,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
  },
});
