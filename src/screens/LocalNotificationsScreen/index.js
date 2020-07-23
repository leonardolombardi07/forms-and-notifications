import React, { useEffect } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";

import useNotifications from "../../hooks/useNotifications";

const LocalNotificationsScreen = () => {
  const [
    hasNotificationsPermission,
    loadingNotificationsPermission,
  ] = useNotifications();

  const handleLocalNotification = async () => {
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

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>LocalNotificationsScreen</Text>
      <Button
        title="Enviar Notificação Local"
        onPress={handleLocalNotification}
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

export default LocalNotificationsScreen;
