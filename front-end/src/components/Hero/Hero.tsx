import { Button } from "../Button/Button";
import styles from "./Hero.module.css";
import ARROW_RIGHT from "../../assets/ArrowRight.tsx";
import { BUTTON_VARIANTS } from "../../constants/enums";
import { useNavigate } from "react-router-dom";

interface IHero {
  heroImg: string;
}

export function Hero({ heroImg }: IHero) {
  const navigate = useNavigate();
  return (
    <section
      style={{ backgroundImage: `url(${heroImg})` }}
      className={styles.heroSection}
    >
      <div>
        <h1 className={styles.heroMainHeading}>Odkryj letnie okazje.</h1>
        <h3 className={styles.heroSubheading}>Rabaty do -70%</h3>
        <Button
          onClick={() => navigate("/wyprzedaz")}
          variant={BUTTON_VARIANTS.secondary}
        >
          Sprawdź już teraz! <ARROW_RIGHT />
        </Button>
      </div>
    </section>
  );
}
