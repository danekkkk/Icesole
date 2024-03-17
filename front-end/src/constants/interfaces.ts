export interface IProduct {
  product: {
    product_name: string;
    product_description: string;
    product_price: number;
    product_price_discounted: number | null;
    product_isDiscounted: boolean;
    product_category: string;
    product_subcategory: string;
    product_subsubcategory: string;
    product_description_dropdown: string;
    product_delivery_dropdown: string;
    product_colors: {
      id: number;
      product_color: string;
      XS: number;
      S: number;
      M: number;
      L: number;
      XL: number;
      XXL: number;
      product_images: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
    }[];
  };
}
