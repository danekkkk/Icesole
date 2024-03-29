import styles from "./ChooseSize.module.css"

interface IChooseSize {
    size: string;
    isActive: boolean;
    setActiveSize: () => void;
    setError: () => void;
    isAvailable?: boolean;
    isError: boolean;
}

export function ChooseSize({size, isActive, setActiveSize, setError, isError, isAvailable = true}: IChooseSize) {
    return <button disabled={!isAvailable} onClick={() => {setActiveSize(); setError();}} className={`${styles.chooseSizeButton} ${isActive ? styles.activeSize : ""} ${isError ? styles.error : ""}`}>
        {size}
    </button>
}