// components/RadioButton.tsx

import { IRadio } from "./types";
import styles from "./Radio.module.scss";
import cx from "classnames";

export default function RadioButton({ name, value, label }: IRadio) {
  return (
    <div className={cx(styles["radio"])}>
      <input
        className={cx(styles["radio__input"])}
        type="radio"
        id={value}
        name={name}
        value={value}
      />
      <label className={cx(styles["radio__label"])} htmlFor={value}>
        {label}
      </label>
    </div>
  );
}
