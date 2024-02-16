import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import HERO_IMAGE from "../../assets/HeroSectionImage.png";

export function MainPage() {
  return (
    <Layout>
      <Hero heroImg={HERO_IMAGE} />
    </Layout>
  );
}
