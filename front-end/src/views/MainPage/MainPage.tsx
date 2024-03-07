import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { JoinNow } from "../../components/JoinNow/JoinNow";

import HERO_IMAGE from "../../assets/HeroSectionImage.png";
import { useLoaderData } from "react-router-dom";

export function MainPage() {
  const bestsellers = useLoaderData();

  return (
    <>
      <Hero heroImg={HERO_IMAGE} />
      <Bestsellers bestsellers={bestsellers} />
      <JoinNow />
    </>
  );
}
