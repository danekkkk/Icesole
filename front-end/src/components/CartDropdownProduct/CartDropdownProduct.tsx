import { useFetchProductImage } from "@/hooks/useFetchProductImage";
import styles from "./CartDropdownProduct.module.css"

export function CartDropdownProduct({product}: any) {

    const productImage = useFetchProductImage(product.product_image);


  return (
    <div className={styles.productRow}>
      <div className={styles.productThumbnailCol}>
        <img src={Object.keys(productImage).length > 0 ? productImage[product.selectedColor][0] : undefined} alt="zdjecie produktu" />
      </div>
      <div className={styles.productInfoCol}>
        <h6>{product.product_name}</h6>
        <p>Rozmiar: {product.selectedSize}</p>
        <p>Ilość: {product.quantity}</p>
        <p>Kolor: {product.selectedColor}</p>
      </div>
      <div className={styles.productPriceCol}>
        <p
          className={`${styles.productPrice} ${
            product.product_isDiscounted ? styles.priceDiscounted : ""
          }`}
        >
          {(product.product_isDiscounted
            ? product.product_price_discounted * parseInt(product.quantity)
            : product.product_price * parseInt(product.quantity)
          ).toFixed(2)}
          zł
          {product.product_isDiscounted ? (
            <span>
              {(product.product_price * parseInt(product.quantity)).toFixed(2)}
              zł
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
