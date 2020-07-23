import React, { useRef } from "react";
import { SafeAreaView, Keyboard, Text, Button, StyleSheet } from "react-native";
import { Form } from "@unform/mobile";

import UnformInput from "../../components/UnformInput";
import { yupSignInValidation } from "../../utils/yupValidation";

const UnformScreen = () => {
  const formRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = async (data) => {
    Keyboard.dismiss();
    formRef.current?.setErrors({});

    const validationErrors = await yupSignInValidation(data);
    if (validationErrors) {
      formRef.current?.setErrors(validationErrors);
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>UnformScreen</Text>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <UnformInput
          name="email"
          iconName="email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
        />
        <UnformInput
          ref={passwordInputRef}
          name="password"
          iconName="lock"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
          textContentType="newPassword"
        />
        <Button title="Sign in" onPress={() => formRef.current?.submitForm()} />
      </Form>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UnformScreen;
