import { Layout } from "../../components/Layout/Layout";
import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { JoinNow } from "../../components/JoinNow/JoinNow";

import HERO_IMAGE from "../../assets/HeroSectionImage.png";

export function MainPage() {
  return (
      <Layout>
        <Hero heroImg={HERO_IMAGE} />
        <Bestsellers />
        <JoinNow />
      </Layout>
  );
}
