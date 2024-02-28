import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { JoinNow } from "../../components/JoinNow/JoinNow";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";

import HERO_IMAGE from "../../assets/HeroSectionImage.png";

export function MainPage() {
  return (
    <>
      <Hero heroImg={HERO_IMAGE} />
      <SectionWrapper>
        <Bestsellers />
      </SectionWrapper>
      <JoinNow />
    </>
  );
}
