import { useState } from "react";
import { CategoryDropdown } from "../CategoryDropdown/CategoryDropdown";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { Navbar } from "../Navbar/Navbar";
import { Topbar } from "../Topbar/Topbar";

import styles from "./Layout.module.css";

interface ILayout {
  children?: JSX.Element | JSX.Element[];
}

export function Layout({ children }: ILayout) {
  const [showCategoryDropdown, setShowCategoryDropdown] =
    useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <>
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
      <main className={styles.mainSection}>{children}</main>
      <Footer />
    </>
  );
}
