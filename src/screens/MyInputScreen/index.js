import React from "react";
import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";

import useForm from "../../hooks/useForm";
import { EMAIL, PASSWORD } from "../../utils/myValidation";

const MyInputScreen = () => {
  const [formValues, errors, handleFormValuesChange] = useForm({
    [EMAIL]: "",
    [PASSWORD]: "",
  });

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>MyInputScreen</Text>
      <TextInput
        value={formValues[EMAIL]}
        onChange={(event) => handleFormValuesChange(event, EMAIL)}
        style={styles.input}
      />
      <Text style={{ color: "red" }}>{errors[EMAIL] || null}</Text>

      <TextInput
        value={formValues[PASSWORD]}
        onChange={(event) => handleFormValuesChange(event, PASSWORD)}
        style={styles.input}
      />
      <Text style={{ color: "red" }}>{errors[PASSWORD] || null}</Text>
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
  input: {
    width: 300,
    height: 40,
    backgroundColor: "blue",
    marginVertical: 10,
  },
});

export default MyInputScreen;
