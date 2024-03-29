import { useContext, useEffect, useState } from "react";

import styles from "./Cart.module.css";
import { CartProduct } from "../CartProduct/CartProduct";

import { CartSummary } from "../CartSummary/CartSummary";
import { CartContext } from "@/contexts/CartContext";
import { ICartContext, ICartProduct } from "@/constants/interfaces";

export function Cart() {
  const [cartValue, setCartValue] = useState<number>(0);
  const cartContext = useContext(CartContext) as ICartContext | null;

  let cartItems: ICartProduct[] = [];
  let setCartItems: React.Dispatch<React.SetStateAction<ICartProduct[]>>;

  if (cartContext) {
    ({ cartItems, setCartItems } = cartContext);
  }

  useEffect(() => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.map((product: any) => {
        total += product.product_isDiscounted
          ? (product.product_price_discounted ?? 0) * parseInt(product.quantity)
          : product.product_price * parseInt(product.quantity);
      });
      setCartValue(parseFloat(total.toFixed(2)));
    }
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleDeleteProduct = (
    id: number,
    selectedSize: string,
    selectedColor: string
  ): void => {
    setCartItems((prevProducts: any[]) => {
      const updatedCart = prevProducts.filter(
        (product) =>
          product.product_id !== id ||
          product.selectedColor !== selectedColor ||
          product.selectedSize !== selectedSize
      );
      localStorage.setItem("cart_products", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (
    id: number,
    newQuantity: number,
    selectedSize: string,
    selectedColor: string
  ) => {
    setCartItems((prevProducts: any[]) => {
      const updatedCart = prevProducts.map((product) =>
        product.product_id === id &&
        product.selectedColor === selectedColor &&
        product.selectedSize === selectedSize
          ? { ...product, quantity: newQuantity }
          : product
      );
      localStorage.setItem("cart_products", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <section className={styles.cartSection}>
      <div className={styles.cartProducts}>
        <h3 className={styles.sectionHeading}>Koszyk</h3>
        {cartItems.length > 0 ? (
          cartItems.map((product: any, index: number) => {
            return (
              <CartProduct
                key={index}
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

      <CartSummary cartValue={cartValue} cartItems={cartItems} />
    </section>
  );
}
