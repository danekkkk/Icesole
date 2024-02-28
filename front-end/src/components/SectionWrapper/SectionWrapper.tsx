import styles from "./SectionWrapper.module.css";

interface ISectionWrapper {
    children?: JSX.Element | JSX.Element[];
}

export function SectionWrapper({children}: ISectionWrapper) {
    return <div className={styles.sectionWrapper}>{children}</div>;
}