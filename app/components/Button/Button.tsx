// components/RadioButton.tsx

import { IButton } from "./types";
import styles from "./Button.module.scss";
import cx from "classnames";

export default function Button({ text }: IButton) {
  return (
    <button className={cx(styles["button"])} type="submit">{text}</button>
  );
}
