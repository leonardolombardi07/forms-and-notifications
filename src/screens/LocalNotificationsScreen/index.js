import React, { useEffect } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

// Essa parte do código garante que um usuário recebe uma notificação
// mesmo se estiver em outro aplicativo
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const LocalNotificationsScreen = ({ navigation }) => {
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
    // getPermissions verifica se um usuário tem permissão pra receber notificações
    // se não tiver, uma solicitação para ter permissão é mandada
    // se não der permissão, um alerta aparece
    // apenas para IOS
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
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>LocalNotificationsScreen</Text>
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

export default LocalNotificationsScreen;
