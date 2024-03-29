import styles from "./ProductInformations.module.css";
import { useContext, useState } from "react";

import RULER from "../../assets/RulerIcon.svg";
import CART_ICON from "../../assets/CartIcon.tsx";
import HEART_ICON_OUTLINE from "../../assets/Heart_Icons/HeartIcon_Outlined.svg";
import HEART_ICON_FILLED from "../../assets/Heart_Icons/HeartIcon_Filled.svg";
import SELECT_DOWN from "../../assets/SelectDown.tsx";
import { Button } from "../Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import { SIZES_FILTER } from "../../constants/filters";
import { ChooseSize } from "../ChooseSize/ChooseSize";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  ICartContext,
  ICartProduct,
  IProduct,
} from "../../constants/interfaces.ts";
import { CartContext } from "../../contexts/CartContext.ts";
import { CartModal } from "../CartDropdown/CartDropdown.tsx";

interface IProductInformations extends IProduct {
  activeColor: string;
  productImages: Record<string, string[]>;
  setActiveColor: (color: string) => void;
  setActiveImage: (index: number) => void;
}

export function ProductInformations({
  product,
  activeColor,
  productImages,
  setActiveColor,
  setActiveImage,
}: IProductInformations) {
  const [activeSize, setActiveSize] = useState<string>("");
  const [activeSizeIndex, setActiveSizeIndex] = useState<number>(-1);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [isDescriptionShown, setIsDescriptionShown] = useState<boolean>(false);
  const [isDeliveryShown, setIsDeliveryShown] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [addedProduct, setAddedProduct] = useState<any>(undefined);
  const [showCartDropdown, setShowCartDropdown] = useState<boolean>(false);

  const { product_id } = useParams();

  const cartContext = useContext(CartContext) as ICartContext | null;

  let cartItems: ICartProduct[] = [];
  let setCartItems: React.Dispatch<React.SetStateAction<ICartProduct[]>>;

  if (cartContext) {
    ({ cartItems, setCartItems } = cartContext);
  }

  const addToCart = () => {
    if (activeSizeIndex !== -1) {
      let itemAlreadyInCart = false;
      setCartItems((prevCartItems: ICartProduct[]) => {
        const updatedCartItems = prevCartItems.map((item: any) => {
          if (
            item.product_id === product_id &&
            item.selectedColor === activeColor &&
            item.selectedSize === SIZES_FILTER.filterBy[activeSizeIndex]
          ) {
            itemAlreadyInCart = true;
            if (
              item.quantity <
              product.product_colors[activeColorIndex][activeSize]
            ) {
              if (
                item.quantity + 1 ===
                product.product_colors[activeColorIndex][activeSize]
              ) {
                product.product_colors[activeColorIndex][activeSize] = 0;
                setActiveSizeIndex(-1);
              }
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          } else {
            return item;
          }
        });

        if (!itemAlreadyInCart) {
          const selectedProduct = {
            ...product,
            product_id: product_id,
            selectedColor: activeColor,
            selectedSize: SIZES_FILTER.filterBy[activeSizeIndex],
            quantity: 1,
            product_image: product.product_colors,
          };
          const updatedCart = [...updatedCartItems, selectedProduct];
          localStorage.setItem("cart_products", JSON.stringify(updatedCart));
          setAddedProduct(selectedProduct);
          setShowCartDropdown(true);
          setTimeout(() => {
            setShowCartDropdown(false);
            setAddedProduct(undefined);
          }, 2500);
          return updatedCart;
        } else {
          localStorage.setItem(
            "cart_products",
            JSON.stringify(updatedCartItems)
          );
          return updatedCartItems;
        }
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h4 className={styles.productName}>{product.product_name}</h4>
      <p>{product.product_description}</p>
      <h4
        className={`${styles.productPrice} ${
          product.product_isDiscounted ? styles.priceDiscounted : ""
        }`}
      >
        {product.product_isDiscounted
          ? product.product_price_discounted
          : product.product_price}
        zł
        {product.product_isDiscounted ? (
          <span>{product.product_price}zł</span>
        ) : null}
      </h4>

      <h5>
        Kolor: <span className={styles.productInfoSpan}>{activeColor}</span>
      </h5>
      <div className={styles.productColorsList}>
        {Object.keys(productImages).length !== 0 &&
          Object.keys(productImages).map((color, index) => (
            <img
              key={index}
              className={`${activeColor == color ? styles.activeImage : ""}`}
              src={productImages[color][0]}
              alt={`productImage#${index}`}
              onClick={() => {
                setActiveColor(color);
                setActiveColorIndex(index);
                setActiveSizeIndex(-1);
                setActiveImage(0);
              }}
            />
          ))}
      </div>
      <h5>
        Rozmiar:{" "}
        <span className={styles.productInfoSpan}>
          {SIZES_FILTER.filterBy[activeSizeIndex]}
        </span>
      </h5>

      <div>
        <div className={styles.productSizesList}>
          {SIZES_FILTER.filterBy.map((size, index) => {
            return (
              <ChooseSize
                key={index}
                size={size}
                isActive={activeSizeIndex == index}
                setActiveSize={() => {
                  setActiveSizeIndex(index);
                  setActiveSize(size);
                }}
                isAvailable={
                  product.product_colors[activeColorIndex][
                    size as keyof (typeof product.product_colors)[typeof activeColorIndex]
                  ] !== 0
                }
                isError={error}
                setError={() => setError(false)}
              />
            );
          })}
        </div>
        {error && <p className={styles.error}>Proszę wybrać rozmiar!</p>}
      </div>

      <Link to={"#"} className={styles.sizesGuide}>
        <img src={RULER} alt="Linijka" /> Przewodnik po rozmiarach
      </Link>

      <div className={styles.productCTA}>
        <Button
          variant={BUTTON_VARIANTS.blackNWhite}
          onClick={addToCart}
          className={styles.addToCart}
        >
          <CART_ICON strokeColor="var(--color-grey-100)" /> Dodaj do koszyka
        </Button>

        <Button
          variant={BUTTON_VARIANTS.secondary}
          onClick={() => setIsFavourite((prevValue) => !prevValue)}
          className={styles.addToFavourites}
        >
          <img
            src={isFavourite ? HEART_ICON_FILLED : HEART_ICON_OUTLINE}
            alt="Serduszko"
          />
        </Button>
      </div>

      <div className={styles.productInformationsDropdownContainer}>
        <div className={styles.productInformationsDropdown}>
          <div
            className={styles.productInformationsButton}
            onClick={() => setIsDescriptionShown((prevValue) => !prevValue)}
          >
            <h6>Opis</h6>
            <SELECT_DOWN rotate={isDescriptionShown ? 180 : 0} />
          </div>

          {isDescriptionShown && (
            <ReactMarkdown children={product.product_description_dropdown} />
          )}
        </div>
        <div className={styles.productInformationsDropdown}>
          <div
            className={styles.productInformationsButton}
            onClick={() => setIsDeliveryShown((prevValue) => !prevValue)}
          >
            <h6>Dostawa i zwrot</h6>
            <SELECT_DOWN rotate={isDeliveryShown ? 180 : 0} />
          </div>

          {isDeliveryShown && (
            <ReactMarkdown children={product.product_delivery_dropdown} />
          )}
        </div>
      </div>

      {showCartDropdown && <div className={styles.addedProduct}>
        <CartModal
          showCartDropdown={true}
          type="modal"
          addedProduct={addedProduct}
        />
      </div>}
    </>
  );
}
