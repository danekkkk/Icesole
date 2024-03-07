import { useState, useEffect, useRef } from "react";
import SELECT_DOWN from "../../assets/SelectDown";
import styles from "./Filters.module.css";

interface IFilter {
  filter: {
    filterName: string;
    filterBy: string[];
  };
  multiple?: boolean;
  iconOrientation?: "right" | "left";
  icon?: JSX.Element;
  hasBorder?: boolean;
}

export function Filters({
  filter,
  multiple,
  iconOrientation = "right",
  icon = <SELECT_DOWN />,
  hasBorder = true,
}: IFilter) {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={filtersRef} className={styles.filterContainer}>
      <div
        onClick={() => setShowFilters((prevValue) => !prevValue)}
        className={`${styles.filterLabel} ${!hasBorder ? styles.noBorder : ""}`}
      >
        {iconOrientation === "left" ? (
          <>
            {icon} {filter.filterName}
          </>
        ) : (
          <>
            {filter.filterName} {icon}
          </>
        )}
      </div>
      
        <div style={{visibility: showFilters ? "visible" : "hidden"}} className={styles.filtersDropdown}>
          <form action="">
            {filter.filterBy.map((filter, index) => {
              return (
                <div className={styles.filterRow} key={`${filter}#${index}`}>
                  <input
                    type={multiple ? "checkbox" : "radio"}
                    name="sizes"
                    id={`${filter}#${index}`}
                  />
                  <label htmlFor={`${filter}#${index}`}>{filter}</label>
                </div>
              );
            })}
          </form>
        </div>
    </div>
  );
}
