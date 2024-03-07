import { ProductsList } from "@/components/ProductsList/ProductsList";
import { HorizontalRule } from "../../components/HorizontalRule/HorizontalRule";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";

export function ProductsPage() {

  return (
    <>
      <HorizontalRule />
      <SectionWrapper>
        <ProductsList />
      </SectionWrapper>
    </>
  );
}
