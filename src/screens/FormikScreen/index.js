import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { withFormik } from "formik";

import { validateField } from "../../utils/formikValidation";

const FormikScreen = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const submiting = () => {
    handleSubmit();
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>FormikScreen</Text>

      <View>
        <TextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          style={styles.input}
        />
        <Text style={{ color: "red" }}>
          {errors.email && touched.email && errors.email}
        </Text>

        <TextInput
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          style={styles.input}
        />
        <Text style={{ color: "red" }}>
          {errors.password && touched.password && errors.password}
        </Text>
        <Button onPress={submiting} title="Submit" />
      </View>
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
    height: 50,
    backgroundColor: "red",
  },
});

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validate: (values) => {
    const errors = {};

    const emailError = validateField(values.email, "email");
    if (emailError) {
      errors.email = emailError;
    }

    const passwordError = validateField(values.password, "password");
    if (passwordError) {
      errors.password = passwordError;
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  },
})(FormikScreen);
