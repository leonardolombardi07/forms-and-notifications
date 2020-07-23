import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

const PushNotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>PushNotificationsScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default PushNotificationsScreen;
