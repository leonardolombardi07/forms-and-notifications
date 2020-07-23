import React, { useEffect } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

const PushNotificationsScreen = () => {
  const triggerNotificationHandler = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Primeira Notificação Local",
        body: "Essa é a primeira notificação local que eu mando (:",
        color: "red",
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        const { status: askedStatus } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        if (!askedStatus !== "granted") {
          return alert("Permissao não concedida");
        }
      }
    };
    getPermissions();
  }, []);
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
