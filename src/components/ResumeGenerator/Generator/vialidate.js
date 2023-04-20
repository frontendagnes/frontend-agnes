export const validate = (name, phone, email, point, education) => {
  if (!name) {
    return "Wpisz imię i nazwisko";
  }
  if (!email) {
    return "Wpisz adres email";
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    return "Zły format e-mail";
  }
  if (!phone) {
    return "Wpisz numer telefonu";
  }
  if (!point.length) {
    return "Sprawdź czy dodałeś doświadczenie ";
  }
  if (!education.length) {
    return "Sprawdź czy dodałeś szkołę";
  }
};
