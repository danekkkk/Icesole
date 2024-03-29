import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import HEART_ICON_OUTLINED from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import CART_ICON from "../../assets/CartIcon.tsx";
import styles from "./IconMenu.module.css";
import { CartModal } from "../CartDropdown/CartDropdown";
import { CartContext } from "@/contexts/CartContext.ts";
import { ICartContext, ICartProduct } from "../../constants/interfaces.ts";

export function IconMenu() {
  const [showCartDropdown, setShowCartDropdown] = useState<boolean>(false);
  const cartContext = useContext(CartContext) as ICartContext | null;
  
  let cartItems: ICartProduct[] = [];
  let setCartItems: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
  
  if (cartContext) {
    ({ cartItems, setCartItems } = cartContext);
  }

  const favouriteItems = 1;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link
          to="/koszyk"
          onMouseEnter={() => setShowCartDropdown(true)}
          onMouseLeave={() => setShowCartDropdown(false)}
        >
          <CART_ICON />
          {cartItems.length > 0 && (
            <span className={styles.numberOfProductsInCart}>{cartItems.length}</span>
          )}
        </Link>
        <CartModal
          onMouseEnter={() => setShowCartDropdown(true)}
          onMouseLeave={() => setShowCartDropdown(false)}
          showCartDropdown={showCartDropdown}
        />
      </li>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON_OUTLINED} alt="Ulubione przedmioty" />
          {favouriteItems > 0 && (
            <span className={styles.numberOfFavouriteProducts}>{favouriteItems}</span>
          )}
        </Link>
      </li>
    </ul>
  );
}
