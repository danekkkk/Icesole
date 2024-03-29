import { useState } from "react";
import styles from "./CartSummary.module.css";

import ARROW_RIGHT from "../../assets/ArrowRight";
import SELECT_DOWN from "../../assets/SelectDown";
import VISA from "../../assets/Visa.svg";
import MASTER_CARD from "../../assets/Mastercard.svg";
import BLIK from "../../assets/Blik.svg";

import { Button } from "../Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import { ICartProduct } from "../../constants/interfaces";

interface ICartSummary {
  cartValue: number;
  cartItems: ICartProduct[];
}

export function CartSummary({ cartValue, cartItems }: ICartSummary) {
  const [isDiscountCodeDropdownOpen, setIsDiscountCodeDropdownOpen] =
    useState<boolean>(false);

  return (
    <div className={styles.summary}>
      <h3 className={styles.sectionHeading}>Podsumowanie</h3>
      <div>
        <div className={styles.discountCode}>
          <div
            className={styles.discountCodeButton}
            onClick={() =>
              setIsDiscountCodeDropdownOpen((prevValue) => !prevValue)
            }
          >
            <h6>Masz kod promocyjny?</h6>
            <SELECT_DOWN rotate={isDiscountCodeDropdownOpen ? 180 : 0} />
          </div>

          {isDiscountCodeDropdownOpen && (
            <form className={styles.discountCodeDropdown} action="#">
              <input
                type="text"
                placeholder="Wpisz kod promocyjny"
                maxLength={25}
              />
              <button type="submit">Zastosuj</button>
            </form>
          )}
        </div>

        <div className={styles.summaryLabel}>
          <div>
            <h6>Suma produktów</h6>
            <p className={cartValue == 0 ? styles.noPrice : ""}>
              {cartValue != 0 ? cartValue + "zł" : ""}
            </p>
          </div>
          <div>
            <h6>Dostawa</h6>
            {cartValue != 0 && (
              <p>{cartValue > 150 ? "darmowa" : 14.99 + "zł"}</p>
            )}
            {cartValue == 0 && <p className={styles.noPrice}></p>}
          </div>
          <hr />
          <div>
            <h5>Suma</h5>
            {cartValue != 0 && (
              <p>
                {cartValue > 150
                  ? cartValue
                  : parseFloat((cartValue + 14.99).toFixed(2))}
                zł
              </p>
            )}
            {cartValue == 0 && <p className={styles.noPrice}></p>}
          </div>
          <Button
            variant={BUTTON_VARIANTS.blackNWhite}
            onClick={() => alert("Finalizacja")}
            opacity={cartItems.length == 0 ? 0.7 : 1}
            disabled={cartItems.length == 0 ? true : false}
          >
            Przejdź do płatności <ARROW_RIGHT />{" "}
          </Button>
        </div>

        <div className={styles.paymentMethods}>
          <p>Akceptujemy</p>
          <div className={styles.methods}>
            <img src={VISA} alt="Visa" />
            <img src={MASTER_CARD} alt="Master card" />
            <img src={BLIK} alt="Blik" />
          </div>
        </div>
      </div>
    </div>
  );
}
