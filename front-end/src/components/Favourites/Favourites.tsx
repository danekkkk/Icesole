import styles from "./Favourites.module.css";
import { Product } from "../../components/Product/Product";
import { Button } from "../../components/Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import ARROW_RIGHT from "../../assets/ArrowRight";
import TOP from "../../assets/Top.jpeg";

const favourites = [
  {
    id: 2,
    name: "Top z długim rękawem",
    price: 69.99,
    priceDiscounted: 49.99,
    description: "Biały top damski z długim rękawem",
    imgSrc: TOP,
    isDiscounted: true,
    isFavourite: true,
  },
];

export function Favourites() {
  return (
    <section className={styles.favouritesSection}>
      <h3 className={styles.favouritesHeading}>Ulubione przedmioty</h3>
      <p className={styles.favouritesHeadingDescription}>
        Tu znajdziesz ostatnio polubione przez siebie produkty
      </p>
      <ul className={styles.favouritesList}>
        {favourites.length != 0 ? (
          favourites.map((product, index) => {
            return <Product key={index} product={product} fullWithMobile={true} />;
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
