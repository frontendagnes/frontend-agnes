export const validate = (email) =>{
    if (!email) {
        return "Wpisz adres email";
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        return "Zły format e-mail";
      }
      return null
}