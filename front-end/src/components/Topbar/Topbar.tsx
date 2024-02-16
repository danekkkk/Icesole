import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { SUB_LINKS } from "../../constants/sublinks";
import styles from "./Topbar.module.css";
import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <header className={styles.topbar}>
      <ul>
        <li>
          <LanguageSelector />
        </li>
        {SUB_LINKS.map((sublink) => {
          return (
            <li key={sublink.sublinkName}>
              <Link to={sublink.path} key={sublink.sublinkName}>
                {sublink.sublinkName}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
