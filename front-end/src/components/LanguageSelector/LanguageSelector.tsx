import { useState } from "react";
import { LANGUAGES } from "../../constants/languages";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  const [showDropdown, setShownDropdown] = useState<boolean>(false);
  const [activeLanguage, setActiveLanguage] = useState<number>(0);

  const handleMouseEnter = () => {
    setShownDropdown(true);
  };

  const handleMouseLeave = () => {
    setShownDropdown(false);
  };

  return (
    <>
      <div
        className={styles.languageSelector}
        onClick={handleMouseEnter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={LANGUAGES[activeLanguage].flagIcon}
          alt={`${LANGUAGES[activeLanguage].name} Flag`}
        />
        <span>{LANGUAGES[activeLanguage].name}</span>
        {showDropdown && (
          <div
            className={styles.languageSelectorDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul>
              {LANGUAGES.map((language, index) => {
                return (
                  <li
                    className={activeLanguage == index ? "" : styles.active}
                    key={language.name}
                    onClick={() => setActiveLanguage(index)}
                  >
                    <img src={language.flagIcon} alt={language.name} />
                    <p>{language.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
