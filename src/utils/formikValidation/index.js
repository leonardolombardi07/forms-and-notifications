export const validateField = (value, type) => {
  if (!value) {
    return "Requisitado";
  }

  switch (type) {
    case "email":
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !emailRegex.test(value) ? "Digite um e-mail válido" : null;
    default:
      return undefined;
  }
};
