import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = () => {
  return (
    <>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.inputContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default Input;
