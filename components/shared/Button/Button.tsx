import { FunctionComponent } from "react";
import styles from "./Button.module.scss";

type Props = {
  label: string;
};

const Button: FunctionComponent<Props> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
