import React, {
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useField } from "@unform/core";
import { MaterialIcons } from "@expo/vector-icons";

const UnformInput = ({ name, iconName, style, ...rest }, ref) => {
  const inputRef = useRef({ value: defaultValue });
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  });

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused ? styles.focusedInput : null,
        style,
      ]}
    >
      <MaterialIcons
        name={iconName}
        size={22}
        color={isFilled || isFocused ? "#FF9000" : "white"}
        style={{ marginHorizontal: 5 }}
      />

      <TextInput
        ref={inputRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputRef.current.value = value;
        }}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    height: 45,
    backgroundColor: "#232129",
    padding: 4,
    marginVertical: 10,

    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: "white",
    width: "100%",
    height: "100%",
  },
  erroredInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: "#ff9000",
  },
});

export default forwardRef(UnformInput);
