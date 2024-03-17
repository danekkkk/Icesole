import styles from "./ProductImages.module.css";

interface IProductImages {
  productImages: string[] | undefined;
  activeImage: number;
  setActiveImage: (index: number) => void;
}

export function ProductImages({
  productImages,
  activeImage,
  setActiveImage,
}: IProductImages) {
  return (
    <div className={styles.productImages}>
      {productImages &&
        productImages.map((image, index) => {
          return (
            <img
              onClick={() => setActiveImage(index)}
              key={index}
              className={`${activeImage == index ? styles.activeImage : ""}`}
              src={image}
              alt={`productImage#${index}`}
            />
          );
        })}
    </div>
  );
}
