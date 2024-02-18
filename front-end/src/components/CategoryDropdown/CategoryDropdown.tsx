import { Link } from "react-router-dom";
import { MEN_CATEGORY, WOMEN_CATEGORY, CHILDREN_CATEGORY, ICategory } from "../../constants/categories";
import styles from "./CategoryDropdown.module.css";
import { useEffect, useState } from "react";

interface ICategoryDropdown {
  setActiveCategory: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  showCategoryDropdown: boolean;
  gender: string;
}

export function CategoryDropdown({
  setActiveCategory,
  onMouseEnter,
  onMouseLeave,
  showCategoryDropdown,
  gender,
}: ICategoryDropdown) {
  const [category, setCategory] = useState<ICategory[]>(MEN_CATEGORY);

  useEffect(() => {
    switch(gender) {
      case "Mężczyźni":
        setCategory(MEN_CATEGORY);
        break;
      case "Kobiety":
        setCategory(WOMEN_CATEGORY);
        break;
      case "Dzieci":
        setCategory(CHILDREN_CATEGORY);
        break;
      default:
        setCategory(MEN_CATEGORY);
    }
  }, [gender]);

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
          {category.map((category) => {
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
        </div>
      </div>
    )
  );
}
