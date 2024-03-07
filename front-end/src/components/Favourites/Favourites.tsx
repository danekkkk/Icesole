import styles from "./Favourites.module.css";
import { Product } from "../../components/Product/Product";
import { Button } from "../../components/Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import ARROW_RIGHT from "../../assets/ArrowRight";

const favourites = [
  {
    "product_name": "T-shirt Regular Fit",
    "product_description": "Jasnoniebieski T-shirt z krótkim rękawem",
    "product_price": 39.99,
    "product_price_discounted": null,
    "product_isDiscounted": false,
    "createdAt": "2024-03-02T15:30:21.293Z",
    "updatedAt": "2024-03-02T15:41:40.723Z",
    "publishedAt": "2024-03-02T15:41:40.721Z",
    "product_images": {
        "data": [
            {
                "id": 1,
                "attributes": {
                    "name": "T-shirt.jpeg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 768,
                    "height": 1152,
                    "formats": {
                        "thumbnail": {
                            "name": "thumbnail_T-shirt.jpeg",
                            "hash": "thumbnail_T_shirt_60f7d32e7e",
                            "ext": ".jpeg",
                            "mime": "image/jpeg",
                            "path": null,
                            "width": 104,
                            "height": 156,
                            "size": 3.07,
                            "url": "/uploads/thumbnail_T_shirt_60f7d32e7e.jpeg"
                        },
                        "large": {
                            "name": "large_T-shirt.jpeg",
                            "hash": "large_T_shirt_60f7d32e7e",
                            "ext": ".jpeg",
                            "mime": "image/jpeg",
                            "path": null,
                            "width": 667,
                            "height": 1000,
                            "size": 46.19,
                            "url": "/uploads/large_T_shirt_60f7d32e7e.jpeg"
                        },
                        "medium": {
                            "name": "medium_T-shirt.jpeg",
                            "hash": "medium_T_shirt_60f7d32e7e",
                            "ext": ".jpeg",
                            "mime": "image/jpeg",
                            "path": null,
                            "width": 500,
                            "height": 750,
                            "size": 28.82,
                            "url": "/uploads/medium_T_shirt_60f7d32e7e.jpeg"
                        },
                        "small": {
                            "name": "small_T-shirt.jpeg",
                            "hash": "small_T_shirt_60f7d32e7e",
                            "ext": ".jpeg",
                            "mime": "image/jpeg",
                            "path": null,
                            "width": 333,
                            "height": 500,
                            "size": 15.4,
                            "url": "/uploads/small_T_shirt_60f7d32e7e.jpeg"
                        }
                    },
                    "hash": "T_shirt_60f7d32e7e",
                    "ext": ".jpeg",
                    "mime": "image/jpeg",
                    "size": 57.21,
                    "url": "/uploads/T_shirt_60f7d32e7e.jpeg",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2024-03-02T15:22:02.257Z",
                    "updatedAt": "2024-03-02T15:22:02.257Z"
                }
            }
        ]
      }
    },
];


export function Favourites() {
  return (
    <section className={styles.favouritesSection}>
      <h3 className={styles.favouritesHeading}>Ulubione przedmioty</h3>
      <p className={styles.favouritesHeadingDescription}>
        Tu znajdziesz ostatnio polubione przez ciebie produkty
      </p>
      <ul className={styles.favouritesList}>
        {favourites.length != 0 ? (
          favourites.map((product, index) => {
            return <Product key={index} product={product} fullWidthMobile={true} />;
          })
        ) : (
          <div className={styles.noResults}>
            <h4>Nic tu nie ma :(</h4>
            <div>
              <p>
                Zacznij przeglądać produktu i polub swój pierwszy produkt już
                teraz!
              </p>
              <Button
                variant={BUTTON_VARIANTS.blackNWhite}
                onClick={() => alert("Przeglądaj")}
              >
                Przeglądaj <ARROW_RIGHT />
              </Button>
            </div>
          </div>
        )}
      </ul>
    </section>
  );
}
