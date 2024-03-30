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

interface filters {
  sizes: string[],
  brands: string[],
  colors: string[],
  price: string,
  sortBy: string,
}

export function useFetchProducts(
  category: string,
  page: number,
  subcategory?: string,
  subsubcategory?: string,
  filters?: filters
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
          navigate(`/`);
        }
  
        let url = `${BACK_END_URL}/products?filters[product_category][$eq]=${PRODUCT_CATEGORY}`;
  
        if (subcategory != undefined) {
          let PRODUCT_SUBCATEGORY = SUBPATH_TO_ENDPOINT_MAPPING[subcategory];
          if (PRODUCT_SUBCATEGORY == undefined) {
            navigate(`/`);
          } else {
            url = `${url}&filters[product_subcategory][$eq]=${PRODUCT_SUBCATEGORY}`;
          }
  
          if (subsubcategory != undefined) {
            let PRODUCT_SUBSUBCATEGORY =
              SUBSUBPATH_TO_ENDPOINT_MAPPING[subsubcategory];
            if (PRODUCT_SUBSUBCATEGORY == undefined) {
              navigate(`/`);
            } else {
              url = `${url}&filters[product_subsubcategory][$eq]=${PRODUCT_SUBSUBCATEGORY}`;
            }
          }
        }
  
        if (filters && filters.brands && filters.brands.length > 0) {
          filters.brands.forEach((brand) => {
            const encodedBrand = encodeURIComponent(brand);
            url += `&filters[product_brand][$eq]=${encodedBrand}`;
          });
        }

        if (filters && filters.price) {
          switch(filters.price) {
            case "50zł - 150zł":
              url += `&filters[product_price][$lte]=150`;
              url += `&filters[product_price][$gte]=50`;
              break;
            case "150zł - 300zł":
              url += `&filters[product_price][$lte]=300`;
              url += `&filters[product_price][$gte]=150`;
              break;
            case "300zł - 500zł":
              url += `&filters[product_price][$lte]=500`;
              url += `&filters[product_price][$gte]=300`;
              break;
            case "500zł - 1000zł":
              url += `&filters[product_price][$lte]=1000`;
              url += `&filters[product_price][$gte]=500`;
              break;
            case "ponad 1000zł":
              url += `&filters[product_price][$gte]=1000`;
              break;
            case "Dowolna":
              break;
          }
        }

        if (filters && filters.sortBy) {
          switch(filters.sortBy) {
            case "Alfabetycznie A-Z":
              url += "&sort[0]=product_name:asc";
              break;
            case "Alfabetycznie Z-A":
              url += "&sort[0]=product_name:desc"
              break;
            case "Od najtańszych":
              url += "&sort[0]=product_price:asc";
              break;
            case "Od najdroższych":
              url += "&sort[0]=product_price:desc";
              break;
            case "Brak":
              break;  
          }
          }
  
        url = `${url}&pagination[page]=${page}&pagination[pageSize]=9&populate=product_colors.product_images`;
  
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
  }, [page, category, subcategory, subsubcategory, filters]);
  

  useEffect(() => {
    setDisplayedProducts([]);
    setTotalPages(1);
    setLastLength(0);
    setTotalProducts(0);
  }, [category, subcategory, subsubcategory, filters]);

  return {
    isLoading,
    displayedProducts,
    totalPages,
    lastLength,
    totalProducts,
  };
}
