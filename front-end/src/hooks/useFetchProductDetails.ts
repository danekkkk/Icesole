import axios from "axios";
import { useEffect, useState } from "react";
import { BACK_END_URL, config } from "../constants/api";

export function useFetchProductDetails(productId: string | undefined) {
  const [productData, setProductData] = useState<any | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BACK_END_URL}/products/${productId}`, config);
        const { data } = response.data;
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductData(null);
      }
    };

    if (productId) {
      fetchProduct();
    }

    return () => {
    };
  }, [productId]);

  return { productData };
}
