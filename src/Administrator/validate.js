export const validate = (age, email, password) => {
  if (age) {
    return "Oj chyba jesteś bootem, jeżeli nie odśwież stronę i spróbuj jeszcze raz";
  }
  if (!email) {
    return "Wpisz email";
  }
  if (!password) {
    return "Hasło jest wymagane!";
  }
  return null;
};
