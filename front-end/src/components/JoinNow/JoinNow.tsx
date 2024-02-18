import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { BUTTON_VARIANTS } from "../../constants/enums";
import ARROW_RIGHT from "../../assets/ArrowRight";

import styles from "./JoinNow.module.css"

export function JoinNow() {
    const navigate = useNavigate();
    return <div className={styles.joinNowSection}>
        <h4>Zostań klubowiczem i odbierz rabat -10% na pierwsze zakupy!</h4>
        <Button
          onClick={() => navigate("/register")}
          variant={BUTTON_VARIANTS.blackNWhite}
        >
          Dołącz teraz! <ARROW_RIGHT />
        </Button>
    </div>
}