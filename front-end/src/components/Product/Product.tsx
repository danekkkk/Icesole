import { useState } from "react";
import styles from "./Product.module.css";
import HEART_ICON_OUTLINED from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import HEART_ICON_FILLED from "../../assets/Heart_Icons/HeartIcon_Filled.svg";
import Sheleton from "@mui/material/Skeleton";
import { shortenText } from "@/utils/shortenText";
import { Link } from "react-router-dom";
import {
  ENDPOINT_TO_PATH_MAPPING,
  ENDPOINT_TO_SUBPATH_MAPPING,
  ENDPOINT_TO_SUBSUBPATH_MAPPING,
} from "../../constants/api";
import { useFetchProductImage } from "@/hooks/useFetchProductImage";
import { IProduct } from "@/constants/interfaces";

interface Product extends IProduct {
  product_id: number;
  fullWidthMobile?: boolean;
  isLoading?: boolean;
}

export function Product({
  product_id,
  product,
  fullWidthMobile,
  isLoading,
}: Product) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const productImages = useFetchProductImage(product.product_colors, isLoading);

  return (
    <div
      className={`${styles.productContainer} ${
        fullWidthMobile ? styles.fullWidthProductContainer : ""
      }`}
    >
      {isLoading ? (
        <div className={styles.productThumbnailContainer}>
          <Sheleton
            sx={{ bgcolor: "grey.100" }}
            variant="rounded"
            animation="wave"
            width={"100%"}
            height={"100%"}
          />
        </div>
      ) : (
        <Link
          to={`/${ENDPOINT_TO_PATH_MAPPING[product.product_category]}/${
            ENDPOINT_TO_SUBPATH_MAPPING[product.product_subcategory]
          }/${
            ENDPOINT_TO_SUBSUBPATH_MAPPING[product.product_subsubcategory]
          }/${product_id}`}
          className={styles.productThumbnailContainer}
        >
          {productImages && (
            <img
              className={styles.productThumbnail}
              src={
                Object.keys(productImages).length !== 0
                  ? productImages[Object.keys(productImages)[0]][0]
                  : undefined
              }
              alt={product.product_name}
              loading="lazy"
            />
          )}
          <div
            className={styles.addToFavourites}
            onClick={() => setIsFavourite((prevValue) => !prevValue)}
          >
            <img
              src={isFavourite ? HEART_ICON_FILLED : HEART_ICON_OUTLINED}
              alt="add to favourites"
            />
          </div>
        </Link>
      )}

      <div className={styles.productInformations}>
        {isLoading ? (
          <Sheleton
            sx={{ bgcolor: "grey.100" }}
            variant="rounded"
            animation="wave"
            width={367}
            height={24}
          />
        ) : (
          <h5>{product.product_name}</h5>
        )}
        {isLoading ? (
          <Sheleton
            sx={{ bgcolor: "grey.100" }}
            variant="rounded"
            animation="wave"
            width={367 / 1.5}
            height={24}
          />
        ) : (
          <p>{shortenText(product.product_description)}</p>
        )}
        {isLoading ? (
          <Sheleton
            sx={{ bgcolor: "grey.100" }}
            variant="rounded"
            animation="wave"
            width={367 / 3}
            height={24}
          />
        ) : (
          <p
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
          </p>
        )}
      </div>
    </div>
  );
}
