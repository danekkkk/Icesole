import BIN_ICON from "../../assets/BinIcon.svg";
import styles from "./CartProduct.module.css";

interface IProduct {
  product: {
    id: number;
    name: string;
    price: number;
    priceDiscounted: number;
    quantity: number;
    size: string;
    color: string;
    description: string;
    imgSrc: string;
    isDiscounted: boolean;
  };
  onDeleteProduct: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
}

export function CartProduct({
  product,
  onDeleteProduct,
  onUpdateQuantity,
}: IProduct) {
  return (
    <div className={styles.productRow}>
      <div className={styles.productThumbnailCol}>
        <img src={product.imgSrc} alt="zdjecie produktu" />
      </div>
      <div className={styles.productInfoCol}>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>Rozmiar: {product.size}</p>
        <p>Kolor: {product.color}</p>
        <div className={styles.productQuantity}>
          Ilość:
          <select
            className={styles.selectQuantity}
            value={product.quantity}
            onChange={(e) =>
              onUpdateQuantity(product.id, parseInt(e.target.value))
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
          <button className={styles.deleteProductBtn} onClick={() => onDeleteProduct(product.id)}>
            <img src={BIN_ICON} alt="Usuń" />
            Usuń
          </button>
        </div>
      </div>
      <div className={styles.productPriceCol}>
        <h5
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
            <span>{(product.price * product.quantity).toFixed(2)}zł</span>
          ) : null}
        </h5>
      </div>
    </div>
  );
}
