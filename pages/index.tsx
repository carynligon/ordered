import Head from "next/head";
import Image from "next/image";
import Home from "../components/pages/Home";
import TopNav from "../components/TopNav";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className="main">
      <TopNav />
      <Home />
    </div>
  );
}
