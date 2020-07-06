import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import List from "./list";

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerPosition={"left"} edgeWidth={0}>
      <Drawer.Screen name={`My Lists`} component={List} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
