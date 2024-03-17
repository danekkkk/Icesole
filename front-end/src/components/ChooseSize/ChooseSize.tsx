import styles from "./ChooseSize.module.css"

interface IChooseSize {
    size: string;
    isActive: boolean;
    setActiveSize: () => void;
    isAvailable?: boolean;
}

export function ChooseSize({size, isActive, setActiveSize, isAvailable = true}: IChooseSize) {
    return <button disabled={!isAvailable} onClick={setActiveSize} className={`${styles.chooseSizeButton} ${isActive ? styles.activeSize : ""}`}>
        {size}
    </button>
}