import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

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
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PushNotificationsScreen;
