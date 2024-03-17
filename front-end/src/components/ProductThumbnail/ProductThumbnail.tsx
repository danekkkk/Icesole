import { useEffect, useRef, useState } from "react";
import styles from "./ProductThumbnail.module.css";

export function ProductThumbnail({ thumbnail }: {thumbnail: string | undefined}) {
  const [isMagnified, setIsMagnified] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [magnifiedPosition, setMagnifiedPosition] = useState({ x: 0, y: 0 });

  const imageThumbnailContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = imageThumbnailContainerRef.current;
    if (!container) return;

    const { width, height, left, top } = container.getBoundingClientRect();

    const { clientX, clientY } = e;

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setMagnifiedPosition({ x: x, y: y });
  };

  const handleMouseEnter = () => {
    setIsMagnified(true);
  };

  const handleMouseLeave = () => {
    setIsMagnified(false);
    setMagnifiedPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={imageThumbnailContainerRef}
      className={styles.productThumbnail}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={thumbnail} alt="Product Thumbnail" />
      {isMagnified && !isMobile && (
        <img
          className={styles.magnifiedImage}
          src={thumbnail}
          alt="Product Thumbnail"
          style={{
            left: -1 * magnifiedPosition.x,
            top: -1 * magnifiedPosition.y,
          }}
        />
      )}
    </div>
  );
}
