import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>HomeScreen</Text>

      <Button
        title="FormikScreen"
        onPress={() => navigation.navigate("FormikScreen")}
      />

      <Button
        title="UnformScreen"
        onPress={() => navigation.navigate("UnformScreen")}
      />

      <Button
        title="MyInputScreen"
        onPress={() => navigation.navigate("MyInputScreen")}
      />

      <Button
        title="LocalNotificationsScreen"
        onPress={() => navigation.navigate("LocalNotificationsScreen")}
      />

      <Button
        title="PushNotificationsScreen"
        onPress={() => navigation.navigate("PushNotificationsScreen")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
  },
});

export default HomeScreen;
