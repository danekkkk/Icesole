export const pluralizeProducts = (count: number) => {
    if (count === 1) {
      return "produkt";
    } else if (count >= 2 && count <= 4) {
      return "produkty";
    } else {
      return "produktów";
    }
};