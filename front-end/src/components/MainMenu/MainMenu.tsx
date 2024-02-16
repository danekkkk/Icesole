import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

import styles from "./MainMenu.module.css";

interface IMainMenu {
  showCategoryDropdown: boolean;
  activeCategory: string;
  setActiveCategory: (categoryName: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MainMenu({
  showCategoryDropdown,
  activeCategory,
  setActiveCategory,
  onMouseEnter,
  onMouseLeave,
}: IMainMenu) {
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map((category) => {
        return (
          <li
            key={category.path}
            onMouseEnter={() => {
              onMouseEnter();
              setActiveCategory(category.categoryName);
            }}
            onMouseLeave={() => {
              onMouseLeave();
            }}
          >
            <NavLink
              className={
                activeCategory === category.categoryName && showCategoryDropdown
                  ? styles.active
                  : ""
              }
              to={category.path}
            >
              {category.categoryName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
