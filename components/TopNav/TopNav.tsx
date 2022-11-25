import Link from "next/link";
import { FunctionComponent, useState } from "react";

import styles from "./TopNav.module.scss";

type Props = {
  setMenuOpen: (open: boolean) => void;
};

const TopNav: FunctionComponent<Props> = ({ setMenuOpen }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link className={styles.logo} href="/">
        Ordered
      </Link>
    </nav>
  );
};

export default TopNav;
