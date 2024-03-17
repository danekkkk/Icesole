import SELECT_DOWN from "@/assets/SelectDown";
import styles from "./Breadcrumb.module.css";
import { NavLink, useParams } from "react-router-dom";
import { GENDERS } from "../../constants/categories";
import { SUBPATH_TO_ENDPOINT_MAPPING, SUBSUBPATH_TO_ENDPOINT_MAPPING } from "../../constants/api";
import { useFetchProductDetails } from "@/hooks/useFetchProductDetails";

export function Breadcrumb() {

  const {category, subcategory, subsubcategory, product_id} = useParams();
  const {productData} = useFetchProductDetails(product_id);

  const foundCategory = GENDERS.find((c) => c.path == category);
  
  const breadcrumbs = [
    {
      categoryName: foundCategory?.categoryName,
      path: `/${foundCategory?.path}`
    }
  ];

  if (subcategory) {
    const foundSubcategory = SUBPATH_TO_ENDPOINT_MAPPING[subcategory];
    breadcrumbs.push({
      categoryName: foundSubcategory,
      path: `/${foundCategory?.path}/${subcategory}`
    })

    if (subsubcategory) {
      const foundSubsubcategory = SUBSUBPATH_TO_ENDPOINT_MAPPING[subsubcategory];
      breadcrumbs.push({
        categoryName: foundSubsubcategory,
        path: `/${foundCategory?.path}/${subcategory}/${subsubcategory}`
      })
    }
    
    if (product_id && productData) {
      breadcrumbs.push({
        categoryName: productData.attributes.product_name,
        path: `/${foundCategory?.path}/${subcategory}/${subsubcategory}/${productData.id}`
      })
    }
  }

  return (
    <ul className={styles.breadcrumb}>
      <li>
        <NavLink to={"/"}>
          <span>Strona główna</span>
        </NavLink>
        <SELECT_DOWN rotate={-90} />
      </li>
      {breadcrumbs.map((breadcrumb) => {
        return <li key={breadcrumb.categoryName}>
          <NavLink end to={breadcrumb.path}>
            <span>{breadcrumb.categoryName}</span>
          </NavLink>
          <SELECT_DOWN rotate={-90} />
        </li>
      })}

    </ul>
  );
}
