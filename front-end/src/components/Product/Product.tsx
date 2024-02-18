import styles from "./Product.module.css";
import HEART_ICON_OUTLINED from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import HEART_ICON_FILLED from "../../assets/Heart_Icons/HeartIcon_Filled.svg";
import { useState } from "react";

interface IProduct {
  product: {
    imgSrc: string;
    name: string;
    description: string;
    price: number;
    priceDiscounted?: number;
    isDiscounted?: boolean;
    isFavourite: boolean;
  };
}

export function Product({ product }: IProduct) {
  const [isFavourite, setIsFavourite] = useState<boolean>(product.isFavourite);
  return (
    <div className={styles.productContainer}>
      <div className={styles.productThumbnailContainer}>
        <img className={styles.productThumbnail} src={product.imgSrc} alt="" />
        <div
          className={styles.addToFavourites}
          onClick={() => setIsFavourite((prevValue) => !prevValue)}
        >
          <img
            src={isFavourite ? HEART_ICON_FILLED : HEART_ICON_OUTLINED}
            alt="add to favourites"
          />
        </div>
      </div>

      <div className={styles.productInformations}>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p className={`${styles.productPrice} ${product.isDiscounted ? styles.priceDiscounted : ""}`}>
          {product.isDiscounted ? product.priceDiscounted : product.price}zł
          {product.isDiscounted ? (
            <span>
              {product.price}zł
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
