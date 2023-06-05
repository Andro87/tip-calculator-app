import styles from "./Header.module.scss";

import Logo from "svgrs/logo.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
};
