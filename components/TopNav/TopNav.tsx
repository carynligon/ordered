import Link from "next/link";

import styles from "./TopNav.module.scss";

const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger}>
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
