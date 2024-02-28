import { HorizontalRule } from "../../components/HorizontalRule/HorizontalRule";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { Favourites } from "../../components/Favourites/Favourites";

export function FavouritePage() {
  return (
    <>
      <HorizontalRule />
      <SectionWrapper>
        <Favourites />
      </SectionWrapper>
    </>
  );
}
