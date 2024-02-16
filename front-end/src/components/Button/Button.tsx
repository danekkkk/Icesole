import styles from "./Button.module.css";
import { BUTTON_VARIANTS } from "../../constants/enums";

interface IButton {
  variant: BUTTON_VARIANTS;
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ variant, onClick, children }: IButton) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
