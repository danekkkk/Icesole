import { Cart } from "../../components/Cart/Cart";
import { HorizontalRule } from "../../components/HorizontalRule/HorizontalRule";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";

export function CartPage() {
  return (
    <>
      <HorizontalRule />
      <SectionWrapper>
        <Cart />
      </SectionWrapper>
    </>
  );
}
