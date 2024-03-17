import axios from "axios";
import { BACK_END_URL, config } from "../constants/api";

export const mainPageLoader = () => {
    return axios
      .get(
        `${BACK_END_URL}/bestsellers?populate=product.product_colors.product_images`,
        config
      )
      .then((response) => response.data.data);
  }