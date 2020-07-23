import axios from "axios";

export const ExpoPushNotificationsApi = axios.create({
  baseURL: "https://exp.host/--/api/v2/push/send",
  headers: {
    Accept: "application/json",
    "Accept-Enconding": "gzip, deflate",
    "Content-Type": "application/json",
  },
});
