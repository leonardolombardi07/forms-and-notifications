import React, { useState } from "react";

import { validateField } from "../utils/myValidation";

function createInitialErrors(initialFormValues) {
  const initialErrors = {};
  for (let key in initialFormValues) {
    initialErrors[key] = null;
  }

  return initialErrors;
}

const useForm = (initialFormValues) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(createInitialErrors(initialFormValues));

  const handleFormValuesChange = (event, valueName) => {
    const {
      nativeEvent: { text },
    } = event;

    setFormValues((previousFormValues) => ({
      ...previousFormValues,
      [valueName]: text,
    }));

    const valueError = validateField({ valueName, text });
    setErrors((previousErrors) => ({
      ...previousErrors,
      [valueName]: valueError || null,
    }));
  };

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  };

  const resetErrors = () => {
    setErrors(createInitialErrors(initialFormValues));
  };

  return [
    formValues,
    errors,
    handleFormValuesChange,
    resetFormValues,
    resetErrors,
  ];
};

export default useForm;
