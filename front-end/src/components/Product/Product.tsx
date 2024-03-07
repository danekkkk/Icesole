import { useState, useEffect } from "react";
import styles from "./Product.module.css";
import HEART_ICON_OUTLINED from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import HEART_ICON_FILLED from "../../assets/Heart_Icons/HeartIcon_Filled.svg";
import Sheleton from "@mui/material/Skeleton";
import { shortenText } from "@/utils/shortenText";
import { Link } from "react-router-dom";
import { ENDPOINT_TO_PATH_MAPPING, ENDPOINT_TO_SUBPATH_MAPPING, ENDPOINT_TO_SUBSUBPATH_MAPPING } from "../../constants/api";

interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: ImageFormat;
      large: ImageFormat;
      medium: ImageFormat;
      small: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  };
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

interface IProduct {
  product_id: number
  product: {
    product_name: string;
    product_description: string;
    product_price: number;
    product_price_discounted: number | null;
    product_isDiscounted: boolean;
    product_category: string;
    product_subcategory: string;
    product_subsubcategory: string;
    product_images: { data: ImageData[] };
  };
  fullWidthMobile?: boolean;
  isLoading?: boolean;
}

export function Product({ product_id, product, fullWidthMobile, isLoading }: IProduct) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [productImage, setProductImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337${product.product_images.data[0].attributes.url}`
        );
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setProductImage(imageUrl);
        } else {
          console.error("Failed to fetch product image");
        }
      } catch (error) {
        console.error("Error fetching product image:", error);
      }
    };

    if (!isLoading) {
      fetchProductImage();
    }
  }, [product, isLoading]);

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
        <Link to={`/${ENDPOINT_TO_PATH_MAPPING[product.product_category]}/${ENDPOINT_TO_SUBPATH_MAPPING[product.product_subcategory]}/${ENDPOINT_TO_SUBSUBPATH_MAPPING[product.product_subsubcategory]}/${product_id}`} className={styles.productThumbnailContainer}>
          {productImage && (
            <img
              className={styles.productThumbnail}
              src={productImage}
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
