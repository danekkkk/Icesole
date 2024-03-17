import { useFetchProductImage } from "@/hooks/useFetchProductImage";

import styles from "./ProductDetails.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../../constants/interfaces";

import { ProductImages } from "../ProductImages/ProductImages.tsx";
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail.tsx";
import { ProductInformations } from "../ProductInformations/ProductInformations.tsx";

export function ProductDetails({ product }: IProduct) {
  const productImages = useFetchProductImage(product.product_colors);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [activeColor, setActiveColor] = useState<string>(
    product.product_colors && product.product_colors[0].product_color
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [product]);

  return (
    <section className={styles.productDetailsContainer}>
      <div className={styles.productImagesSection}>
        <ProductImages
          productImages={
            Object.keys(productImages).length !== 0
              ? productImages[activeColor]
              : undefined
          }
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <ProductThumbnail
          thumbnail={
            Object.keys(productImages).length !== 0
              ? productImages[activeColor][activeImage]
              : undefined
          }
        />
      </div>
      <div className={styles.productInformationsSection}>
        <ProductInformations
          product={product}
          activeColor={activeColor}
          productImages={productImages}
          setActiveColor={setActiveColor}
          setActiveImage={setActiveImage}
        />
      </div>
    </section>
  );
}
