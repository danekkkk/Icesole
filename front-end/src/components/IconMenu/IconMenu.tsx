import HEART_ICON_OUTLINED from "../../assets/HeartIcon_Outlined.svg";
import CART_ICON from "../../assets/CartIcon.svg";
import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";

export function IconMenu() {
  const cartItems = 2;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/koszyk">
          <img src={CART_ICON} alt="Koszyk" />
          {cartItems > 0 && (
            <span className={styles.numberOfProductsInCart}>{cartItems}</span>
          )}
        </Link>
      </li>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON_OUTLINED} alt="Ulubione przedmioty" />
        </Link>
      </li>
    </ul>
  );
}
