import { useEffect, useState } from "react";

interface IProductColor {
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
}

export function useFetchProductImage(productColors: IProductColor[], isLoading?: boolean) {
  const [productImagesByColor, setProductImagesByColor] = useState<Record<string, string[]>>({});
  useEffect(() => {
    const fetchProductImage = async () => {
      try {
        const imagesByColor: Record<string, string[]> = {};
    
        for (let i = 0; i < productColors.length; i++) {
          const color = productColors[i].product_color;
          const imagesForColor: string[] = [];
    
          for (let j = 0; j < productColors[i].product_images.data.length; j++) {
            const response = await fetch(`http://localhost:1337${productColors[i].product_images.data[j].attributes.url}`);
    
            if (response.ok) {
              const blob = await response.blob();
              const imageUrl = URL.createObjectURL(blob);
    
              imagesForColor.push(imageUrl);
            } else {
              console.error("Failed to fetch product image");
            }
          }
    
          imagesByColor[color] = imagesForColor;
        }
    
        setProductImagesByColor(imagesByColor);
      } catch (error) {
        console.error("Error fetching product images by color:", error);
      }
    };
    

    if (!isLoading) {
      fetchProductImage();
    }
  }, [productColors, isLoading]);

  return productImagesByColor;
}

