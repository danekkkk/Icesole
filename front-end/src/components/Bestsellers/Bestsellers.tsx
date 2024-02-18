import { useEffect, useState } from "react";
import styles from "./Bestsellers.module.css";
import ARROW_RIGHT from "../../assets/ArrowRight";

import { Product } from "../Product/Product";
import T_SHIRT from "../../assets/T-shirt.jpeg";
import HAT from "../../assets/Czapka z daszkiem.jpeg";
import CARGO from "../../assets/Spodnie Cargo.jpeg";
import TOP from "../../assets/Top.jpeg";

const bestsellers = [
  {
    id: 1,
    name: "T-shirt Regular Fit",
    price: 39.99,
    description: "Jasnoniebieski T-shirt z krótkim rękawem",
    imgSrc: T_SHIRT,
    isDiscounted: false,
    isFavourite: false,
  },
  {
    id: 2,
    name: "Top z długim rękawem",
    price: 69.99,
    priceDiscounted: 49.99,
    description: "Biały top damski z długim rękawem",
    imgSrc: TOP,
    isDiscounted: true,
    isFavourite: false,
  },
  {
    id: 3,
    name: "Czapka z daszkiem",
    price: 49.99,
    description: "Czarna przeciwdeszczowa czapka z daszkiem",
    imgSrc: HAT,
    isDiscounted: false,
    isFavourite: false,
  },
  {
    id: 4,
    name: "Spodnie cargo",
    price: 59.99,
    description: "Damskie szare odpinane spodnie cargo",
    imgSrc: CARGO,
    isDiscounted: false,
    isFavourite: false,
  },
];

const gap = 18;
let productWidth = 367;

export function Bestsellers() {
  const [translateX, setTranslateX] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [visibleProducts, setVisibleProducts] = useState(0);

  useEffect(() => {
    function handleResize() {
      let padding = 150;

      if (window.innerWidth <= 1224) {
        padding = 100;
      }
      if (window.innerWidth <= 1024) {
        padding = 56;
        productWidth = 307;
      }
      if (window.innerWidth > 1024) {
        productWidth = 367;
      }
      if (window.innerWidth <= 758) {
        padding = 28;
      }

      const screenWidth = window.innerWidth - padding;
      const productsPerRow = Math.floor(screenWidth / (productWidth + gap));

      setTranslateX(0);
      setCurrentIndex(0);
      setVisibleProducts(productsPerRow);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.bestsellersSection}>
      <h4>Popularne w tym miesiącu</h4>

      <ul className={styles.bestsellersList} style={{ left: translateX }}>
        {bestsellers.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </ul>

      <button
        disabled={currentIndex == 0 ? true : false}
        onClick={() => {
          setTranslateX(
            (previousTranslate) => previousTranslate + productWidth + gap
          );
          setCurrentIndex((currentIndex) => currentIndex - 1);
        }}
        className={styles.previousProduct}
      >
        <ARROW_RIGHT rotate={180} />
      </button>
      <button
        disabled={
          currentIndex + visibleProducts == bestsellers.length ? true : false
        }
        onClick={() => {
          setTranslateX(
            (previousTranslate) => previousTranslate - productWidth - gap
          );
          setCurrentIndex((currentIndex) => currentIndex + 1);
        }}
        className={styles.nextProduct}
      >
        <ARROW_RIGHT />
      </button>
    </section>
  );
}
