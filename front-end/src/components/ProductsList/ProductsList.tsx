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
    subsubcategory || undefined
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setPage(1);
  }, [category, subcategory, subsubcategory]);

  const fetchMoreData = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className={styles.productsListSection}>
      <h3 className={styles.productsListHeading}>
        {getTranslatedCategory(category)}
      </h3>
      <Breadcrumb />
      <div className={styles.filtersContainer}>
        <div className={styles.filterBy}>
          <Filters filter={SIZES_FILTER} multiple />
          <Filters filter={BRANDS_FILTER} multiple />
          <Filters filter={COLORS_FILTER} multiple />
          <Filters filter={PRICES_FILTER} />
        </div>
        <div className={styles.orderBy}>
          <Filters
            filter={ORDER_BY}
            iconOrientation="left"
            icon={FILTER_ICON()}
            hasBorder={false}
          />
        </div>
      </div>
      <h4>
        {totalProducts} {pluralizeProducts(totalProducts)}
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
            {displayedProducts.map((product, index) => (
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
            ))}
          </div>
        ) : (
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
