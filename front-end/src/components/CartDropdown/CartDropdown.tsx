import { useEffect, useState } from "react";
import styles from "./CartDropdown.module.css";

import T_SHIRT from "../../assets/T-shirt.jpeg";
import TOP from "../../assets/Top.jpeg";

import { Button } from "../Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import ARROW_RIGHT from "../../assets/ArrowRight";
import { useNavigate } from "react-router-dom";

const productsInCart = [
  {
    id: 1,
    name: "T-shirt Regular Fit",
    price: 39.99,
    priceDiscounted: 29.99,
    description: "Jasnoniebieski T-shirt z krótkim rękawem",
    quantity: 1,
    size: "M",
    color: "Jasnoniebieski",
    imgSrc: T_SHIRT,
    isDiscounted: false,
  },
  {
    id: 2,
    name: "Top z długim rękawem",
    price: 69.99,
    priceDiscounted: 49.99,
    description: "Biały top damski z długim rękawem",
    quantity: 1,
    size: "XS",
    color: "Biały",
    imgSrc: TOP,
    isDiscounted: true,
  },
];

interface ICartModal {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  showCartDropdown: boolean;
}

export function CartModal({
  onMouseEnter,
  onMouseLeave,
  showCartDropdown,
}: ICartModal) {
  const [cartValue, setCartValue] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    productsInCart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setCartValue(parseFloat(total.toFixed(2)));
  }, [productsInCart]);

  return (
    showCartDropdown && (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={styles.cartDropdown}
      >
        <div className={styles.cartHeader}>
          <div>
            <h5>Twój koszyk</h5>
            <p>Wartość koszyka: </p>
          </div>
          <span className={styles.cartValue}>{cartValue}zł</span>
        </div>
        <div className={styles.cartMain}>
          {productsInCart.map((product, index) => {
            return (
              <div key={index} className={styles.productRow}>
                <div className={styles.productThumbnailCol}>
                  <img src={product.imgSrc} alt="zdjecie produktu" />
                </div>
                <div className={styles.productInfoCol}>
                  <h6>{product.name}</h6>
                  <p>Rozmiar: {product.size}</p>
                  <p>Ilość: {product.quantity}</p>
                  <p>Kolor: {product.color}</p>
                </div>
                <div className={styles.productPriceCol}>
                  <p
                    className={`${styles.productPrice} ${
                      product.isDiscounted ? styles.priceDiscounted : ""
                    }`}
                  >
                    {(product.isDiscounted
                      ? product.priceDiscounted * product.quantity
                      : product.price * product.quantity
                    ).toFixed(2)}
                    zł
                    {product.isDiscounted ? (
                      <span>
                        {(product.price * product.quantity).toFixed(2)}zł
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cartFooter}>
          <Button
            variant={BUTTON_VARIANTS.secondary}
            onClick={() => navigate("/koszyk")}
          >
            Wyswietl koszyk ({productsInCart.length})
          </Button>
          <Button
            variant={BUTTON_VARIANTS.primary}
            onClick={() => navigate("/platnosc")}
          >
            Przejdź do kasy <ARROW_RIGHT />
          </Button>
        </div>
      </div>
    )
  );
}
