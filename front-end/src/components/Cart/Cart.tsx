import { useEffect, useState } from "react";

import styles from "./Cart.module.css";
import { CartProduct } from "../CartProduct/CartProduct";

import TOP from "../../assets/Top.jpeg";
import T_SHIRT from "../../assets/T-shirt.jpeg";
import { CartSummary } from "../CartSummary/CartSummary";

export function Cart() {
  const [productsInCart, setProductsInCart] = useState([
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
  ]);
  const [cartValue, setCartValue] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    productsInCart.forEach((product) => {
      total += product.isDiscounted
        ? product.priceDiscounted * product.quantity
        : product.price * product.quantity;
    });

    setCartValue(parseFloat(total.toFixed(2)));
  });

  const handleDeleteProduct = (id: number): void => {
    setProductsInCart((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setProductsInCart((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <section className={styles.cartSection}>
      <div className={styles.cartProducts}>
        <h3 className={styles.sectionHeading}>Koszyk</h3>
        {productsInCart.length > 0 ? (
          productsInCart.map((product) => {
            return (
              <CartProduct
                key={product.id}
                product={product}
                onDeleteProduct={handleDeleteProduct}
                onUpdateQuantity={handleUpdateQuantity}
              />
            );
          })
        ) : (
          <h4 className={styles.noProductsInCart}>Brak produktów w koszyku.</h4>
        )}
      </div>

      <CartSummary cartValue={cartValue} productsInCart={productsInCart} />
    </section>
  );
}
