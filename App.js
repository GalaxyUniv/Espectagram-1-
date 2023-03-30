import DrawerNavigator from "./Navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
}
