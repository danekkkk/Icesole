import axios from "axios";
import { BACK_END_URL, config } from "../constants/api";
import { redirect } from "react-router-dom";

export const productDetailsLoader = async (id: string | undefined) => {
  let data = null;  
  try {
      data = await axios
      .get(
        `${BACK_END_URL}/products/${id}?populate=product_colors.product_images`,
        config
      )
      .then((response) => response.data.data);
    } catch(error) {
      return redirect("/");
    }

    return data
  }