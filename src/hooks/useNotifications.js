import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

const useNotifications = (
  foregroundNotificationCallback,
  backgroundNotificationCallback
) => {
  const [
    loadingNotificationsPermission,
    setLoadingNotificationsPermission,
  ] = useState(true);
  const [hasNotificationsPermission, setHasNotificationsPermission] = useState(
    false
  );

  useEffect(() => {
    const getNotificationPermissions = async () => {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        const { status: askedStatus } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        if (askedStatus !== "granted") {
          setHasNotificationsPermission(false);
        } else {
          setHasNotificationsPermission(true);
        }
      }

      setLoadingNotificationsPermission(false);
    };

    getNotificationPermissions();
  }, []);

  useEffect(() => {
    // foregroundSubscription identifica quando uma notificação é enviada
    // com o usuário dentro do app
    const foregroundSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        // esse código é executado com dados da notificação
        if (foregroundNotificationCallback) {
          foregroundNotificationCallback();
        }
      }
    );

    return () => {
      foregroundSubscription.remove();
    };
  }, []);

  useEffect(() => {
    // backgroundSubscription identifica quando uma notificação é enviada
    // com o usuário fora do app
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // esse código é executado quando usuário clica na notificação
        if (backgroundNotificationCallback) {
          backgroundNotificationCallback();
        }
      }
    );

    return () => {
      backgroundSubscription.remove();
    };
  }, []);

  return [hasNotificationsPermission, loadingNotificationsPermission];
};

export default useNotifications;
