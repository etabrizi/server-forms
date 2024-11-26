// components/RadioButton.tsx

import { ITextbox } from "./types";
import styles from "./Textbox.module.scss";
import cx from "classnames";

export default function Textbox({ id, name, value, label, }: ITextbox) {
  return (
    <div className={cx(styles["textbox"])}>
      <label className={cx(styles["textbox__label"])} htmlFor={id}>
          {label}
        </label>
        <input className={cx(styles["textbox__input"])} id={id} type="text" name={name} value={value} />
    </div>
  );
}
