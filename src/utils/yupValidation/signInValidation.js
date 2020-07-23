import * as Yup from "yup";

export const yupSignInValidation = async (data) => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  try {
    await signInSchema.validate(data, {
      abortEarly: false,
    });

    return null;
  } catch (err) {
    const validationErrors = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
    }
    return validationErrors;
  }
};
