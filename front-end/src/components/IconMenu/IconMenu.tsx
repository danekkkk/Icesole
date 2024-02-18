import { useState } from "react";
import { Link } from "react-router-dom";

import HEART_ICON_OUTLINED from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import CART_ICON from "../../assets/CartIcon.svg";
import styles from "./IconMenu.module.css";
import { CartModal } from "../CartDropdown/CartDropdown";

export function IconMenu() {
  const [showCartDropdown, setShowCartDropdown] = useState<boolean>(false);

  const cartItems = 2;
  const favouriteItems = 1;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link
          to="/koszyk"
          onMouseEnter={() => setShowCartDropdown(true)}
          onMouseLeave={() => setShowCartDropdown(false)}
        >
          <img src={CART_ICON} alt="Koszyk" />
          {cartItems > 0 && (
            <span className={styles.numberOfProductsInCart}>{cartItems}</span>
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
