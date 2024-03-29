import { useContext, useEffect, useState } from "react";
import styles from "./CartDropdown.module.css";

import { Button } from "../Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import ARROW_RIGHT from "../../assets/ArrowRight";
import ACCEPT_ICON from "../../assets/AcceptIcon.png"
import { useNavigate } from "react-router-dom";
import { CartContext } from "@/contexts/CartContext";
import { CartDropdownProduct } from "../CartDropdownProduct/CartDropdownProduct";
import { ICartContext, ICartProduct } from "../../constants/interfaces";

interface ICartModal {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  showCartDropdown: boolean;
  type?: "list" | "modal";
  addedProduct?: ICartProduct;
}

export function CartModal({
  onMouseEnter,
  onMouseLeave,
  showCartDropdown,
  type = "list",
  addedProduct
}: ICartModal) {
  const [cartValue, setCartValue] = useState<number>(0);
  const cartContext = useContext(CartContext) as ICartContext | null;

  let cartItems: ICartProduct[] = [];
  let setCartItems: React.Dispatch<React.SetStateAction<ICartProduct[]>>;

  if (cartContext) {
    ({ cartItems, setCartItems } = cartContext);
  }
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    cartItems.map((product: any) => {
      total += product.product_isDiscounted
        ? product.product_price_discounted * parseInt(product.quantity)
        : product.product_price * parseInt(product.quantity);
    });

    setCartValue(parseFloat(total.toFixed(2)));
  });

  return (
    showCartDropdown && (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={styles.cartDropdown}
      >
        <div className={styles.cartHeader}>
          <div>
            {type == "list" ? (
              <>
                <h5>Twój koszyk</h5>
                <p>Wartość koszyka: </p>
              </>
            ) : (
              <h5><img style={{width: 14, height: 14, marginRight: 8}} src={ACCEPT_ICON} alt="Ikona akceptacji" />Dodano do koszyka</h5>
            )}
          </div>
          {type == "list" && <span className={styles.cartValue}>{cartValue}zł</span>}
        </div>
        <div className={styles.cartMain}>
          {type == "list" && cartItems.length > 0 ? (
            cartItems.map((product, index) => {
              return <CartDropdownProduct key={index} product={product} />;
            })
          ) : type == "modal" ? <CartDropdownProduct product={addedProduct} /> : (
            <p className={styles.noProducts}>Brak produktów w koszyku.</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <Button
              variant={BUTTON_VARIANTS.secondary}
              onClick={() => navigate("/koszyk")}
            >
              Wyswietl koszyk ({cartItems.length})
            </Button>
            <Button
              variant={BUTTON_VARIANTS.primary}
              onClick={() => navigate("/platnosc")}
            >
              Przejdź do kasy <ARROW_RIGHT />
            </Button>
          </div>
        )}
      </div>
    )
  );
}
