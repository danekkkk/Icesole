import styles from "./Button.module.css";
import { BUTTON_VARIANTS } from "../../constants/enums";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: BUTTON_VARIANTS;
  opacity?: number;
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ variant, onClick, children, opacity, disabled }: IButton) {
  return (
    <button disabled={disabled} style={{opacity: opacity}} onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}

