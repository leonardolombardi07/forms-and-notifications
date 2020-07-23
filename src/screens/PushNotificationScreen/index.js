import React from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

import * as Notifications from "expo-notifications";

const PushNotificationsScreen = () => {
  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Primeira Notificação Local",
        body: "Essa é a primeira notificação local que eu mando (:",
        color: "red",
      },
      trigger: {
        seconds: 10,
      },
    });
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>PushNotificationsScreen</Text>
      <Button
        title="Trigger Notification"
        onPress={triggerNotificationHandler}
      />
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
