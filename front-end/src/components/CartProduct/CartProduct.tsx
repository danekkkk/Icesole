import { ICartProduct } from "../../constants/interfaces";
import BIN_ICON from "../../assets/BinIcon.svg";
import styles from "./CartProduct.module.css";
import { useFetchProductImage } from "@/hooks/useFetchProductImage";

interface CartProduct extends ICartProduct {
  onDeleteProduct: (id: number, selectedSize: string, selectedColor: string) => void;
  onUpdateQuantity: (id: number, newQuantity: number, selectedSize: string, selectedColor: string) => void;
}

export function CartProduct({
  product,
  onDeleteProduct,
  onUpdateQuantity,
}: CartProduct) {

  const productImage = useFetchProductImage(product.product_colors);

  return (
    <div className={styles.productRow}>
      <div className={styles.productThumbnailCol}>
        <img src={productImage?.[product.selectedColor]?.[0]} alt="zdjecie produktu" />
      </div>
      <div className={styles.productInfoCol}>
        <h5>{product.product_name}</h5>
        <p>{product.product_description}</p>
        <p>Rozmiar: {product.selectedSize}</p>
        <p>Kolor: {product.selectedColor}</p>
        <div className={styles.productQuantity}>
          Ilość:
          <select
            className={styles.selectQuantity}
            value={product.quantity}
            onChange={(e) =>
              onUpdateQuantity(product.product_id, parseInt(e.target.value), product.selectedSize, product.selectedColor)
            }
          >
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className={styles.deleteProductBtn} onClick={() => onDeleteProduct(product.product_id, product.selectedSize, product.selectedColor)}>
            <img src={BIN_ICON} alt="Usuń" />
            Usuń
          </button>
        </div>
      </div>
      <div className={styles.productPriceCol}>
        <h5
          className={`${styles.productPrice} ${
            product.product_isDiscounted ? styles.priceDiscounted : ""
          }`}
        >
          {(product.product_isDiscounted && product.product_price_discounted
            ? product.product_price_discounted * parseInt(product.quantity)
            : product.product_price * parseInt(product.quantity)
          ).toFixed(2)}
          zł
          {product.product_isDiscounted ? (
            <span>{(product.product_price * parseInt(product.quantity)).toFixed(2)}zł</span>
          ) : null}
        </h5>
      </div>
    </div>
  );
}
