import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";

const Stack = createStackNavigator();

export default App = () => {
  return <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name="Color Palette" component={ColorPalette} />
      </Stack.Navigator>
  </NavigationContainer>;
};
