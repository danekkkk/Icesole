import styles from "./Button.module.css";
import { BUTTON_VARIANTS } from "../../constants/enums";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: BUTTON_VARIANTS;
  opacity?: number;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant, onClick, onMouseEnter, onMouseLeave, children, opacity, disabled, className }: IButton) {
  return (
    <button disabled={disabled} style={{opacity: opacity}}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={`${styles.button} ${styles[variant]} ${className ? className : ""}`}>
      {children}
    </button>
  );
}

