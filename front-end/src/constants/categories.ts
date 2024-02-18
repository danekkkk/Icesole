export interface ICategory {
  categoryTitle: string;
  path: string;
  subcategories: { subcategoryName: string; subcategoryPath: string }[];
}

export const GENDERS: { categoryName: string; path: string }[] = [
  {
    categoryName: "Mężczyźni",
    path: "mezczyzni",
  },
  {
    categoryName: "Kobiety",
    path: "kobiety",
  },
  {
    categoryName: "Dzieci",
    path: "dzieci",
  },
];

export const MEN_CATEGORY: ICategory[] = [
  {
    categoryTitle: "Buty",
    path: "mezczyzni/buty",
    subcategories: [
      {
        subcategoryName: "Sneakersy",
        subcategoryPath: "sneakersy",
      },
      {
        subcategoryName: "Obuwie sportowe",
        subcategoryPath: "sportowe",
      },
      {
        subcategoryName: "Obuwie zimowe",
        subcategoryPath: "zimowe",
      },
      {
        subcategoryName: "Obuwie górskie",
        subcategoryPath: "gorskie",
      },
      {
        subcategoryName: "Obuwie ocieplane",
        subcategoryPath: "ocieplane",
      },
    ],
  },
  {
    categoryTitle: "Odzież",
    path: "mezczyzni/odziez",
    subcategories: [
      {
        subcategoryName: "T-shirty i podkoszulki",
        subcategoryPath: "tshirty-i-podkoszulki",
      },
      {
        subcategoryName: "Bluzy i swetry",
        subcategoryPath: "bluzy-i-swetry",
      },
      {
        subcategoryName: "Spodnie",
        subcategoryPath: "spodnie",
      },
      {
        subcategoryName: "Kurtki i płaszcze",
        subcategoryPath: "kurtki-i-plaszcze",
      },
      {
        subcategoryName: "Bielizna i skarpety",
        subcategoryPath: "bielizna-i-skarpety",
      },
      {
        subcategoryName: "Piżamy",
        subcategoryPath: "pizamy",
      },
      {
        subcategoryName: "Spodenki",
        subcategoryPath: "spodenki",
      },
    ],
  },
  {
    categoryTitle: "Akcesoria",
    path: "mezczyzni/akcesoria",
    subcategories: [
      {
        subcategoryName: "Torebki",
        subcategoryPath: "torebki",
      },
      {
        subcategoryName: "Plecaki",
        subcategoryPath: "plecaki",
      },
      {
        subcategoryName: "Czapki",
        subcategoryPath: "czapki",
      },
      {
        subcategoryName: "Okulary przeciwsłoneczne",
        subcategoryPath: "okulary-przeciwsloneczne",
      },
      {
        subcategoryName: "Rękawiczki",
        subcategoryPath: "rekawiczki",
      },
      {
        subcategoryName: "Czapki zimowe",
        subcategoryPath: "czapki-zimowe",
      },
    ],
  },
];

export const WOMEN_CATEGORY: ICategory[] = [
  {
    categoryTitle: "Buty",
    path: "kobiety/buty",
    subcategories: [
      {
        subcategoryName: "Sneakersy",
        subcategoryPath: "sneakersy",
      },
      {
        subcategoryName: "Obuwie sportowe",
        subcategoryPath: "sportowe",
      },
      {
        subcategoryName: "Obuwie zimowe",
        subcategoryPath: "zimowe",
      },
      {
        subcategoryName: "Obuwie górskie",
        subcategoryPath: "gorskie",
      },
      {
        subcategoryName: "Obuwie ocieplane",
        subcategoryPath: "ocieplane",
      },
    ],
  },
  {
    categoryTitle: "Odzież",
    path: "kobiety/odziez",
    subcategories: [
      {
        subcategoryName: "T-shirty i podkoszulki",
        subcategoryPath: "tshirty-i-podkoszulki",
      },
      {
        subcategoryName: "Bluzy i swetry",
        subcategoryPath: "bluzy-i-swetry",
      },
      {
        subcategoryName: "Spodnie",
        subcategoryPath: "spodnie",
      },
      {
        subcategoryName: "Kurtki i płaszcze",
        subcategoryPath: "kurtki-i-plaszcze",
      },
      {
        subcategoryName: "Bielizna i skarpety",
        subcategoryPath: "bielizna-i-skarpety",
      },
      {
        subcategoryName: "Piżamy",
        subcategoryPath: "pizamy",
      },
      {
        subcategoryName: "Spodenki",
        subcategoryPath: "spodenki",
      },
    ],
  },
  {
    categoryTitle: "Akcesoria",
    path: "kobiety/akcesoria",
    subcategories: [
      {
        subcategoryName: "Torebki",
        subcategoryPath: "torebki",
      },
      {
        subcategoryName: "Plecaki",
        subcategoryPath: "plecaki",
      },
      {
        subcategoryName: "Czapki",
        subcategoryPath: "czapki",
      },
      {
        subcategoryName: "Okulary przeciwsłoneczne",
        subcategoryPath: "okulary-przeciwsloneczne",
      },
      {
        subcategoryName: "Rękawiczki",
        subcategoryPath: "rekawiczki",
      },
      {
        subcategoryName: "Czapki zimowe",
        subcategoryPath: "czapki-zimowe",
      },
    ],
  },
];

export const CHILDREN_CATEGORY: ICategory[] = [
  {
    categoryTitle: "Buty",
    path: "dzieci/buty",
    subcategories: [
      {
        subcategoryName: "Sneakersy",
        subcategoryPath: "sneakersy",
      },
      {
        subcategoryName: "Obuwie sportowe",
        subcategoryPath: "sportowe",
      },
      {
        subcategoryName: "Obuwie zimowe",
        subcategoryPath: "zimowe",
      },
      {
        subcategoryName: "Obuwie górskie",
        subcategoryPath: "gorskie",
      },
      {
        subcategoryName: "Obuwie ocieplane",
        subcategoryPath: "ocieplane",
      },
    ],
  },
  {
    categoryTitle: "Odzież",
    path: "dzieci/odziez",
    subcategories: [
      {
        subcategoryName: "T-shirty i podkoszulki",
        subcategoryPath: "tshirty-i-podkoszulki",
      },
      {
        subcategoryName: "Bluzy i swetry",
        subcategoryPath: "bluzy-i-swetry",
      },
      {
        subcategoryName: "Spodnie",
        subcategoryPath: "spodnie",
      },
      {
        subcategoryName: "Kurtki i płaszcze",
        subcategoryPath: "kurtki-i-plaszcze",
      },
      {
        subcategoryName: "Bielizna i skarpety",
        subcategoryPath: "bielizna-i-skarpety",
      },
      {
        subcategoryName: "Piżamy",
        subcategoryPath: "pizamy",
      },
      {
        subcategoryName: "Spodenki",
        subcategoryPath: "spodenki",
      },
    ],
  },
  {
    categoryTitle: "Akcesoria",
    path: "dzieci/akcesoria",
    subcategories: [
      {
        subcategoryName: "Torebki",
        subcategoryPath: "torebki",
      },
      {
        subcategoryName: "Plecaki",
        subcategoryPath: "plecaki",
      },
      {
        subcategoryName: "Czapki",
        subcategoryPath: "czapki",
      },
      {
        subcategoryName: "Okulary przeciwsłoneczne",
        subcategoryPath: "okulary-przeciwsloneczne",
      },
      {
        subcategoryName: "Rękawiczki",
        subcategoryPath: "rekawiczki",
      },
      {
        subcategoryName: "Czapki zimowe",
        subcategoryPath: "czapki-zimowe",
      },
    ],
  },
];
