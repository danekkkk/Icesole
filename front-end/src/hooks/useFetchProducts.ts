import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BACK_END_URL,
  PATH_TO_ENDPOINT_MAPPING,
  SUBPATH_TO_ENDPOINT_MAPPING,
  SUBSUBPATH_TO_ENDPOINT_MAPPING,
  config,
} from "../constants/api";

export function useFetchProducts(
  category: string,
  page: number,
  subcategory?: string,
  subsubcategory?: string
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [displayedProducts, setDisplayedProducts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [lastLength, setLastLength] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let PRODUCT_CATEGORY = PATH_TO_ENDPOINT_MAPPING[category];

        if (PRODUCT_CATEGORY == undefined) {
          PRODUCT_CATEGORY = PATH_TO_ENDPOINT_MAPPING[1];
          navigate(`/kobiety`);
        }

        let url = `${BACK_END_URL}/products?filters[product_category][$eq]=${PRODUCT_CATEGORY}`;

        if (subcategory != undefined) {
          let PRODUCT_SUBCATEGORY = SUBPATH_TO_ENDPOINT_MAPPING[subcategory];
          if (PRODUCT_SUBCATEGORY == undefined) {
            navigate(`/kobiety`);
          } else {
            url = `${url}&filters[product_subcategory][$eq]=${PRODUCT_SUBCATEGORY}`;
          }

          if (subsubcategory != undefined) {
            let PRODUCT_SUBSUBCATEGORY =
              SUBSUBPATH_TO_ENDPOINT_MAPPING[subsubcategory];
            if (PRODUCT_SUBSUBCATEGORY == undefined) {
              navigate(`/kobiety}`);
            } else {
              url = `${url}&filters[product_subsubcategory][$eq]=${PRODUCT_SUBSUBCATEGORY}`;
            }
          }
        }

        url = `${url}&pagination[page]=${page}&pagination[pageSize]=9&populate=*`;

        const response = await axios.get(url, config);

        const { data, meta } = response.data;
        setTotalProducts(meta.pagination.total);

        if (page === 1) {
          setTotalPages(meta.pagination.pageCount);
          setDisplayedProducts(data);
        } else {
          setDisplayedProducts((prevProducts) => [...prevProducts, ...data]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    fetchProducts();
    setLastLength(displayedProducts.length);
  }, [page, category, subcategory, subsubcategory]);

  useEffect(() => {
    setDisplayedProducts([]);
    setTotalPages(1);
    setLastLength(0);
    setTotalProducts(0);
  }, [category, subcategory, subsubcategory]);

  return {
    isLoading,
    displayedProducts,
    totalPages,
    lastLength,
    totalProducts,
  };
}
