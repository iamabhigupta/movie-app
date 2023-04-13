export const isValidEmail = (email) => {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return validEmail.test(email);
};
