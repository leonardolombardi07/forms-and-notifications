import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const PushNotificationsScreen = ({ navigation }) => {
  const [expoToken, setExpoToken] = useState(null);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        const { status: askedStatus } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        if (askedStatus !== "granted") {
          return alert("Permissão para notificações não concedida");
        }
      }

      // if status is granted
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      setExpoToken(token);
    };

    getPermissions();
  }, []);

  useEffect(() => {
    // foregroundSubscription identifica quando uma notificação é enviada
    // com o usuário dentro do app
    const foregroundSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        // esse código é executado com dados da notificação
        navigation.navigate("FormikScreen");
      }
    );

    return () => {
      foregroundSubscription.remove();
    };
  }, []);

  useEffect(() => {
    // foregroundSubscription identifica quando uma notificação é enviada
    // com o usuário fora do app
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // esse código é executado quando usuário clica na notificação
        navigation.navigate("UnformScreen");
      }
    );

    return () => {
      backgroundSubscription.remove();
    };
  }, []);

  const handlePushNotificationsSend = async () => {
    const expoServerUrl = "https://exp.host/--/api/v2/push/send";

    try {
      const res = await fetch(expoServerUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Enconding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: expoToken,
          title: "Push Notification via App",
          body: "Primeira Push Notification pelo App (:",
        }),
      });
      const responseJson = await res.json();
      console.log(responseJson);
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
