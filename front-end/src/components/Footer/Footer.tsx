import styles from "./Footer.module.css";
import {
  FOOTER_LINKS,
  FOOTER_SOCIALMEDIA_LINKS,
} from "../../constants/footerLinks.tsx";
import ARROW_RIGHT from "../../assets/ArrowRight.tsx";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        {/* footer top part */}
        {FOOTER_LINKS.map((el, index) => {
          return (
            <section
              key={`${el.title}${index} `}
              className={styles.footerSectionTop}
            >
              <h5>{el.title}</h5>
              <ul className={styles.footerLinks}>
                {el.links.map((link, linkIndex) => {
                  return (
                    <li key={`${el.title}${linkIndex} `}>
                      <Link to={link.path}>{link.linkName}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {/* footer mid part */}
        <section className={styles.footerSectionMid}>
          <h5>Obserwuj nas</h5>
          <ul className={styles.footerSocialMediaLinks}>
            {FOOTER_SOCIALMEDIA_LINKS.map((socialmedia, index) => {
              return (
                <li key={`${socialmedia.linkName}${index} `}>
                  <Link to={socialmedia.path}>{socialmedia.linkImg()}</Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.footerSectionMid}>
          <h5>Zapisz się na newsletter</h5>
          <p>
            Najnowsze informacje o wyprzedażach i produktach w twojej skrzynce
            pocztowej
          </p>
          <form className={styles.newsletterForm} action="#">
            <input type="email" placeholder="Adres e-mail" maxLength={25} />
            <button type="submit">
              <ARROW_RIGHT />
            </button>
          </form>
        </section>
      </footer>
      {/* footer bottom part */}
      <section className={styles.footerSectionBottom}>
        <p>© 2024 Icesole Shop, Wszelkie prawa zastrzeżone</p>
      </section>
    </>
  );
}
