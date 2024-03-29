import { useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CategoryDropdown } from "../CategoryDropdown/CategoryDropdown";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { Navbar } from "../Navbar/Navbar";
import { Topbar } from "../Topbar/Topbar";

import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { ICartProduct } from "@/constants/interfaces";


export function Layout() {
  const [showCategoryDropdown, setShowCategoryDropdown] =
    useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const [cartItems, setCartItems] = useState<ICartProduct[]>(localStorage["cart_products"] ? JSON.parse(localStorage["cart_products"]) : []);

  return (
    <>
    <CartContext.Provider value={{cartItems, setCartItems}}>
      <Topbar />
      <Navbar>
        <Logo />
        <MainMenu
          showCategoryDropdown={showCategoryDropdown}
          activeCategory={activeCategory}
          setActiveCategory={(categoryName: string) =>
            setActiveCategory(categoryName)
          }
          onMouseEnter={() => {
            setShowCategoryDropdown(true);
          }}
          onMouseLeave={() => setShowCategoryDropdown(false)}
        />
        <CategoryDropdown
          setActiveCategory={() => setActiveCategory("")}
          onMouseEnter={() => setShowCategoryDropdown(true)}
          onMouseLeave={() => setShowCategoryDropdown(false)}
          showCategoryDropdown={showCategoryDropdown}
          gender={activeCategory}
        />
        <IconMenu />
      </Navbar>
      <main className={styles.mainSection}>
        <Outlet />
      </main>
      <Footer />
    </CartContext.Provider>
    </>
  );
  
}
