import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import FormikScreen from "../screens/FormikScreen";
import MyInputScreen from "../screens/MyInputScreen";
import UnformScreen from "../screens/UnformScreen";
import LocalNotificationsScreen from "../screens/LocalNotificationsScreen";
import PushNotificationsScreen from "../screens/PushNotificationsScreen";

const MainStack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen
          name="PushNotificationsScreen"
          component={PushNotificationsScreen}
        />
        <MainStack.Screen
          name="LocalNotificationsScreen"
          component={LocalNotificationsScreen}
        />
        <MainStack.Screen name="FormikScreen" component={FormikScreen} />
        <MainStack.Screen name="MyInputScreen" component={MyInputScreen} />
        <MainStack.Screen name="UnformScreen" component={UnformScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
