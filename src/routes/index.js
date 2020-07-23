import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FormScreen from "../screens/FormScreen";
import PushNotificationScreen from "../screens/PushNotificationScreen";

const MainStack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="FormScreen" component={FormScreen} />
        <MainStack.Screen
          name="PushNotificationsScreen"
          component={PushNotificationScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
