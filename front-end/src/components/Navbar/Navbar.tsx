import { ReactNode } from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  children: ReactNode;
};

export function Navbar({ children }: NavbarProps) {
  return <nav className={styles.navbar}>{children}</nav>;
}
