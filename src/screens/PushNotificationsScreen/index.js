import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";

import useNotifications from "../../hooks/useNotifications";
import { ExpoPushNotificationsApi } from "../../services/apis";

const PushNotificationsScreen = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState(null);
  const [
    hasNotificationsPermission,
    loadingNotificationsPermission,
  ] = useNotifications();

  useEffect(() => {
    const getExpoPushToken = async () => {
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      setExpoPushToken(token);
    };

    getExpoPushToken();
  }, []);

  const handlePushNotificationsSend = async () => {
    try {
      const body = JSON.stringify({
        to: expoPushToken,
        title: "Push Notification via App",
        body: "Primeira Push Notification pelo App (:",
      });
      await ExpoPushNotificationsApi.post("", body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>PushNotificationsScreen</Text>
      <Button
        title="Handle Push Notification"
        onPress={handlePushNotificationsSend}
      />
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
