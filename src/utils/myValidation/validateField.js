import { EMAIL, PASSWORD } from "./types";

export const validateField = ({ valueName, text }) => {
  if (!text) {
    return null;
  }

  switch (valueName) {
    case EMAIL:
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !emailRegex.test(text) ? "Digite um e-mail válido" : null;
    case PASSWORD:
      const passwordRegex = /^.{6,}$/;
      return !passwordRegex.test(text)
        ? "A senha deve ter no mínimo 6 caracteres"
        : null;
    default:
      return null;
  }
};
