import { Link } from "react-router-dom";
import { MEN_CATEGORY } from "../../constants/categories";
import { GENDERS_ENUM } from "../../constants/enums";
import styles from "./CategoryDropdown.module.css";

interface ICategoryDropdown {
  setActiveCategory: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  showCategoryDropdown: boolean;
  gender: GENDERS_ENUM;
}

export function CategoryDropdown({
  setActiveCategory,
  onMouseEnter,
  onMouseLeave,
  showCategoryDropdown,
  gender,
}: ICategoryDropdown) {
  switch (gender) {
    case GENDERS_ENUM.kobiety:
      return;
  }

  return (
    showCategoryDropdown && (
      <div className={styles.categoryDropdownOverlay}>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => {
            onMouseLeave();
            setActiveCategory();
          }}
          className={styles.categoryDropdownContainer}
        >
          {MEN_CATEGORY.map((category) => {
            return (
              <section
                className={styles.categorySection}
                key={category.categoryTitle}
              >
                <h5>
                  <Link to={category.path}>{category.categoryTitle}</Link>
                </h5>
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.subcategoryName}>
                        <Link
                          to={`${category.path}/${subcategory.subcategoryPath}`}
                        >
                          {subcategory.subcategoryName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
          <section>
            <h5></h5>
            <ul>
              <li></li>
            </ul>
          </section>
        </div>
      </div>
    )
  );
}
