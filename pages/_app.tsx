import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

import TopNav from "../components/TopNav";
import NavMenu from "../components/NavMenu";
import styles from "../styles/App.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`main ${menuOpen ? "menu-open" : ""}`}>
      <TopNav setMenuOpen={setMenuOpen} />
      <NavMenu open={menuOpen} setMenuOpen={setMenuOpen} />
      <Component {...pageProps} />
    </div>
  );
}
