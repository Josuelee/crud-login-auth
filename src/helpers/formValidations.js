export const formValidations = (form) => {
  const errors = {};

  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.correo) {
    errors.correo = "Correo is required";
  } else if (!regexEmail.test(form.correo)) {
    errors.correo = "Invalid email";
  }

  return errors;
};
