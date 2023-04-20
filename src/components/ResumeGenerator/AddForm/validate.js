export const validate = (dateStart, title, workplace) => {
    if (!dateStart) {
      return "Sprawdź datę rozpoczęcia";
    }
  
    if (!title) {
      return "Sprawdź nazwę";
    }
    if (!workplace) {
      return "Sprawdź miejsce";
    }
  
    return null;
  };