import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ListItemModel from "../models/ListItem";
import MinusSquareSvg from "../../assets/svg/minus-square";
import PlusSquareSvg from "../../assets/svg/plus-square";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ListItemProps {
  item: ListItemModel;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const incrementQuantity = () => {
    // TODO: Make these configurable later
    quantity < 10 ? setQuantity((prevQuantity) => prevQuantity + 1) : null;
  };

  const decrementQuantity = () => {
    // TODO: Make these configurable later
    quantity > 0 ? setQuantity((prevQuantity) => prevQuantity - 1) : null;
  };

  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity}>
          <MinusSquareSvg />
        </TouchableOpacity>
        <Text style={styles.listItemText}>{quantity}</Text>
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
