export const BACK_END_URL = "http://localhost:1337/api";

export const config = {
  headers: {
    Authorization:
      "Bearer f2a3501ae7a9d282a1766a7cb5e4978543e3bce643551771168b042b7a10707d13750b176957c2a282e7752e4c9c7b3727104eb63e5ffd53c988a0f13bd452ad8208a2c7c06aecd22c88a363d7f34c70e001616fcb10cb7e537d0d853ce492eeca6c538e4777508d77f5571c70a5e225d399d1a4d6c632ce07f066b43c25ad2d",
  },
};

export const PATH_TO_ENDPOINT_MAPPING: {[key: string]: string} = {
  mezczyzni: "Mężczyźni",
  kobiety: "Kobiety",
  dzieci: "Dzieci",
};

// Odwrotne mapowanie z wartości na klucze dla PATH_TO_ENDPOINT_MAPPING
export const ENDPOINT_TO_PATH_MAPPING: {[key: string]: string} = {};
Object.keys(PATH_TO_ENDPOINT_MAPPING).forEach(key => {
  ENDPOINT_TO_PATH_MAPPING[PATH_TO_ENDPOINT_MAPPING[key]] = key;
});

export const SUBPATH_TO_ENDPOINT_MAPPING: {[key: string]: string} = {
  buty: "Buty",
  odziez: "Odzież",
  akcesoria: "Akcesoria",
};

// Odwrotne mapowanie z wartości na klucze dla SUBPATH_TO_ENDPOINT_MAPPING
export const ENDPOINT_TO_SUBPATH_MAPPING: {[key: string]: string} = {};
Object.keys(SUBPATH_TO_ENDPOINT_MAPPING).forEach(key => {
  ENDPOINT_TO_SUBPATH_MAPPING[SUBPATH_TO_ENDPOINT_MAPPING[key]] = key;
});

export const SUBSUBPATH_TO_ENDPOINT_MAPPING: {[key: string]: string} = {
  sneakersy: "Sneakersy",
  sportowe: "Obuwie sportowe",
  zimowe: "Obuwie zimowe",
  gorskie: "Obuwie górskie",
  ocieplane: "Obuwie ocieplane",
  "tshirty-i-podkoszulki": "T-shirty i podkoszulki",
  "bluzy-i-swetry": "Bluzy i swetry",
  spodnie: "Spodnie",
  "kurtki-i-plaszcze": "Kurtki i płaszcze",
  "bielizna-i-skarpety": "Bielizna i skarpety",
  pizamy: "Piżamy",
  spodenki: "Spodenki",
  torebki: "Torebki",
  plecaki: "Plecaki",
  czapki: "Czapki",
  "okulary-przeciwsloneczne": "Okulary przeciwsłoneczne",
  rekawiczki: "Rękawiczki",
  "czapki-zimowe": "Czapki zimowe"
};

// Odwrotne mapowanie z wartości na klucze dla SUBSUBPATH_TO_ENDPOINT_MAPPING
export const ENDPOINT_TO_SUBSUBPATH_MAPPING: {[key: string]: string} = {};
Object.keys(SUBSUBPATH_TO_ENDPOINT_MAPPING).forEach(key => {
  ENDPOINT_TO_SUBSUBPATH_MAPPING[SUBSUBPATH_TO_ENDPOINT_MAPPING[key]] = key;
});

