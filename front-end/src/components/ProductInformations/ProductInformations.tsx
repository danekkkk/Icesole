import styles from "./ProductInformations.module.css";
import { useState } from "react";

import RULER from "../../assets/RulerIcon.svg";
import CART_ICON from "../../assets/CartIcon.tsx";
import HEART_ICON_OUTLINE from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import HEART_ICON_FILLED from "../../assets/Heart_Icons/HeartIcon_Filled.svg";
import SELECT_DOWN from "../../assets/SelectDown.tsx";
import { Button } from "../Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import { SIZES_FILTER } from "../../constants/filters";
import { ChooseSize } from "../ChooseSize/ChooseSize";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { IProduct } from "../../constants/interfaces.ts";

interface IProductInformations extends IProduct{
    activeColor:  string;
    productImages: Record<string, string[]>
    setActiveColor: (color: string) => void;
    setActiveImage: (index: number) => void;
}

export function ProductInformations({product, activeColor, productImages, setActiveColor, setActiveImage}: IProductInformations) {
  const [activeSize, setActiveSize] = useState<number>(-1);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [isDescriptionShown, setIsDescriptionShown] = useState<boolean>(false);
  const [isDeliveryShown, setIsDeliveryShown] = useState<boolean>(false);
console.log(productImages)
  return (
    <>
      <h4 className={styles.productName}>{product.product_name}</h4>
      <p>{product.product_description}</p>
      <h4
        className={`${styles.productPrice} ${
          product.product_isDiscounted ? styles.priceDiscounted : ""
        }`}
      >
        {product.product_isDiscounted
          ? product.product_price_discounted
          : product.product_price}
        zł
        {product.product_isDiscounted ? (
          <span>{product.product_price}zł</span>
        ) : null}
      </h4>

      <h5>
        Kolor: <span className={styles.productInfoSpan}>{activeColor}</span>
      </h5>
      <div className={styles.productColorsList}>
        {Object.keys(productImages).length !== 0 &&
          Object.keys(productImages).map((color, index) => (
            <img
              key={index}
              className={`${activeColor == color ? styles.activeImage : ""}`}
              src={productImages[color][0]}
              alt={`productImage#${index}`}
              onClick={() => {
                setActiveColor(color);
                setActiveColorIndex(index);
                setActiveSize(-1);
                setActiveImage(0);
              }}
            />
          ))}
      </div>
      <h5>
        Rozmiar:{" "}
        <span className={styles.productInfoSpan}>
          {SIZES_FILTER.filterBy[activeSize]}
        </span>
      </h5>
      <div className={styles.productSizesList}>
        {SIZES_FILTER.filterBy.map((size, index) => {
          return (
            <ChooseSize
              key={index}
              size={size}
              isActive={activeSize == index}
              setActiveSize={() => setActiveSize(index)}
              isAvailable={
                product.product_colors[activeColorIndex][
                  size as keyof (typeof product.product_colors)[typeof activeColorIndex]
                ] !== 0
              }
            />
          );
        })}
      </div>
      
      <Link to={"#"} className={styles.sizesGuide}>
        <img src={RULER} alt="Linijka" /> Przewodnik po rozmiarach
      </Link>

      <div className={styles.productCTA}>
        <Button
          variant={BUTTON_VARIANTS.blackNWhite}
          onClick={() => alert("Dodaj do koszyka")}
          className={styles.addToCart}
        >
          <CART_ICON strokeColor="var(--color-grey-100)" /> Dodaj do koszyka
        </Button>
        <Button
          variant={BUTTON_VARIANTS.secondary}
          onClick={() => setIsFavourite((prevValue) => !prevValue)}
          className={styles.addToFavourites}
        >
          <img
            src={isFavourite ? HEART_ICON_FILLED : HEART_ICON_OUTLINE}
            alt="Serduszko"
          />
        </Button>
      </div>

      <div className={styles.productInformationsDropdownContainer}>
        <div className={styles.productInformationsDropdown}>
          <div
            className={styles.productInformationsButton}
            onClick={() => setIsDescriptionShown((prevValue) => !prevValue)}
          >
            <h6>Opis</h6>
            <SELECT_DOWN rotate={isDescriptionShown ? 180 : 0} />
          </div>

          {isDescriptionShown && (
            <ReactMarkdown children={product.product_description_dropdown} />
          )}
        </div>
        <div className={styles.productInformationsDropdown}>
          <div
            className={styles.productInformationsButton}
            onClick={() => setIsDeliveryShown((prevValue) => !prevValue)}
          >
            <h6>Dostawa i zwrot</h6>
            <SELECT_DOWN rotate={isDeliveryShown ? 180 : 0} />
          </div>

          {isDeliveryShown && (
            <ReactMarkdown children={product.product_delivery_dropdown} />
          )}
        </div>
      </div>
    </>
  );
}
