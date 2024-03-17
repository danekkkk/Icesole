import { useLoaderData } from "react-router-dom";
import { HorizontalRule } from "../../components/HorizontalRule/HorizontalRule";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";

export function ProductDetailsPage() {
  const product: any = useLoaderData();

  return (
    <>
      <HorizontalRule />
      <SectionWrapper>
        <div style={{ marginTop: 52 }}>
          <Breadcrumb />
          <ProductDetails product={product.attributes} />
        </div>
      </SectionWrapper>
    </>
  );
}
