import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import List from "./list";
import Login from "../screens/login";

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerPosition={"left"} edgeWidth={0}>
      <Drawer.Screen name={`My Lists`} component={List} />
      <Drawer.Screen name={`Login`} component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
