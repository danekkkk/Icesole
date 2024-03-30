import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

import styles from "./ProductsList.module.css";
import { pluralizeProducts } from "../../utils/pluralizeProducts";
import { getTranslatedCategory } from "../../utils/getTranslatedCategory";
import {
  SIZES_FILTER,
  BRANDS_FILTER,
  COLORS_FILTER,
  PRICES_FILTER,
  ORDER_BY,
} from "../../constants/filters";
import FILTER_ICON from "../../assets/FilterIcon.tsx";

import InfiniteScroll from "react-infinite-scroll-component";
import { Product } from "../../components/Product/Product";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { CircularProgress } from "@mui/material";
import { Filters } from "../Filters/Filters";

export function ProductsList() {
  const [filters, setFilters] = useState({
    sizes: [],
    brands: [],
    colors: [],
    price: "",
    sortBy: "",
  });

  const [page, setPage] = useState<number>(1);
  const { category, subcategory, subsubcategory } = useParams();

  const {
    isLoading,
    displayedProducts,
    totalPages,
    lastLength,
    totalProducts,
  } = useFetchProducts(
    category || "",
    page,
    subcategory || undefined,
    subsubcategory || undefined,
    filters || undefined
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setPage(1);
  }, [category, subcategory, subsubcategory, filters]);

  const fetchMoreData = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFilterChange = (filterName: string, value: string | string[]) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (
        filterName === "sizes" ||
        filterName === "brands" ||
        filterName === "colors"
      ) {
        const index = newFilters[filterName].indexOf(value);
        if (index === -1) {
          newFilters[filterName] = [...newFilters[filterName], value];
        } else {
          newFilters[filterName] = newFilters[filterName].filter(
            (item) => item !== value
          );
        }
      } else {
        newFilters[filterName] = value;
      }
      return newFilters;
    });
  };

  const anyFiltredProducts = (displayedProducts: any) => {
    const selectedSizes = filters && filters.sizes ? filters.sizes : [];
    const selectedColors = filters && filters.colors ? filters.colors : [];

    for (const product of displayedProducts) {
      const hasSelectedSize =
        selectedSizes.length === 0 ||
        selectedSizes.some((size: string) => {
          return product.attributes.product_colors[0][size] > 0;
        });

      const hasSelectedColor =
        selectedColors.length === 0 ||
        selectedColors.some((color: string) => {
          return product.attributes.product_colors[0].product_color === color;
        });

      if (hasSelectedSize && hasSelectedColor) {
        return true;
      }
    }

    return false;
  };

  const countFilteredProducts = (displayedProducts: any[]) => {
    const selectedSizes = filters && filters.sizes ? filters.sizes : [];
    const selectedColors = filters && filters.colors ? filters.colors : [];
    let count = 0;

    for (const product of displayedProducts) {
      const hasSelectedSize =
        selectedSizes.length === 0 ||
        selectedSizes.some((size: string) => {
          return product.attributes.product_colors[0][size] > 0;
        });

      const hasSelectedColor =
        selectedColors.length === 0 ||
        selectedColors.some((color: string) => {
          return product.attributes.product_colors[0].product_color === color;
        });

      if (hasSelectedSize && hasSelectedColor) {
        count++;
      }
    }

    return count;
  };

  return (
    <section className={styles.productsListSection}>
      <h3 className={styles.productsListHeading}>
        {getTranslatedCategory(category)}
      </h3>
      <Breadcrumb />
      <div className={styles.filtersContainer}>
        <div className={styles.filterBy}>
          <Filters
            filter={SIZES_FILTER}
            multiple
            onFilterChange={handleFilterChange}
          />
          <Filters
            filter={BRANDS_FILTER}
            multiple
            onFilterChange={handleFilterChange}
          />
          <Filters
            filter={COLORS_FILTER}
            multiple
            onFilterChange={handleFilterChange}
          />
          <Filters filter={PRICES_FILTER} onFilterChange={handleFilterChange} />
        </div>
        <div className={styles.orderBy}>
          <Filters
            filter={ORDER_BY}
            iconOrientation="left"
            icon={FILTER_ICON()}
            hasBorder={false}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <h4>
        {!anyFiltredProducts(displayedProducts)
          ? 0
          : filters.colors.length > 0 || filters.sizes.length > 0
          ? countFilteredProducts(displayedProducts)
          : totalProducts}{" "}
        {!anyFiltredProducts(displayedProducts)
          ? pluralizeProducts(0)
          : filters.colors.length > 0 || filters.sizes.length > 0
          ? pluralizeProducts(countFilteredProducts(displayedProducts))
          : pluralizeProducts(totalProducts)}
      </h4>

      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={fetchMoreData}
        hasMore={page < totalPages}
        loader={
          <CircularProgress
            className={styles.loadingProducts}
            size={30}
            color="inherit"
          />
        }
        scrollThreshold={0.8}
      >
        {displayedProducts.length ? (
          <div className={styles.productsList}>
            {displayedProducts.map((product, index) => {
              const selectedSizes =
                filters && filters.sizes ? filters.sizes : [];
              const selectedColors =
                filters && filters.colors ? filters.colors : [];

              const hasSelectedSize =
                selectedSizes.length === 0 ||
                selectedSizes.some((size: string) => {
                  return product.attributes.product_colors[0][size] > 0;
                });

              const hasSelectedColor =
                selectedColors.length === 0 ||
                selectedColors.some((color: string) => {
                  return (
                    product.attributes.product_colors[0].product_color === color
                  );
                });

              if (hasSelectedSize && hasSelectedColor) {
                return (
                  <Product
                    key={index}
                    product_id={product.id}
                    product={product.attributes}
                    isLoading={
                      isLoading &&
                      index >= lastLength &&
                      index < displayedProducts.length
                    }
                    fullWidthMobile={true}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        ) : (
          <div className={styles.noResults}>
            <h4>Przepraszamy</h4>
            <div>
              <p>Brak produktów z podanymi kryteriami wyszukiwania.</p>
            </div>
          </div>
        )}

        {!anyFiltredProducts(displayedProducts) && (
          <div className={styles.noResults}>
            <h4>Przepraszamy</h4>
            <div>
              <p>Brak produktów z podanymi kryteriami wyszukiwania.</p>
            </div>
          </div>
        )}
      </InfiniteScroll>
    </section>
  );
}
