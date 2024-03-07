export const getTranslatedCategory = (category: string | undefined) => {
    switch (category) {
      case "mezczyzni":
        return "Mężczyźni";
      case "kobiety":
        return "Kobiety";
      case "dzieci":
        return "Dzieci";
    }
  };