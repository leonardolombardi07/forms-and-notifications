import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FormikScreen from "../screens/FormikScreen";
import MyInputScreen from "../screens/MyInputScreen";
import UnformScreen from "../screens/UnformScreen";
import PushNotificationScreen from "../screens/PushNotificationScreen";

const MainStack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="PushNotificationsScreen"
          component={PushNotificationScreen}
        />
        <MainStack.Screen name="FormikScreen" component={FormikScreen} />
        <MainStack.Screen name="MyInputScreen" component={MyInputScreen} />
        <MainStack.Screen name="UnformScreen" component={UnformScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
