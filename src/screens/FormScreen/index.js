import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import Input from "../../components/Input";

const FormScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>FormScreen</Text>
      <Input />
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

export default FormScreen;
