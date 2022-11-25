import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./NavMenu.module.scss";

type MenuProps = {
  open: boolean;
  setMenuOpen: (open: boolean) => void;
};

const NavMenu: FunctionComponent<MenuProps> = ({ open, setMenuOpen }) => {
  return (
    <div className={open ? styles.menuOpened : styles.menuClosed}>
      <div className={styles.close} onClick={() => setMenuOpen(false)}>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li>
          <Link href="/review" onClick={() => setMenuOpen(false)}>
            + Review
          </Link>
        </li>
        <li>
          <Link href="/friend" onClick={() => setMenuOpen(false)}>
            + Friend
          </Link>
        </li>
        <li>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
        </li>
        <li>
          <Link href="/settings" onClick={() => setMenuOpen(false)}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
