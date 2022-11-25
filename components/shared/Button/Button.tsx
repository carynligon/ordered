import { FunctionComponent } from "react";
import styles from "./Button.module.scss";

type Props = {
  label: string;
  onClick?: () => void;
};

const Button: FunctionComponent<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
