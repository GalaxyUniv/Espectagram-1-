import React, { Component } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    );
  }
}
