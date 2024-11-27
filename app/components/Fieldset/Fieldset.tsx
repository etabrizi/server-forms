// components/RadioButton.tsx

import { IFieldset } from "./types";
import styles from "./Fieldset.module.scss";
import cx from "classnames";


export default function Fieldset({ legend, ariaDescribedBy, children }: IFieldset) {
  return (
    <fieldset className={cx(styles["fieldset"])} aria-describedby={ariaDescribedBy}>
    <legend  className={cx(styles["fieldset__legend"])}>{legend}</legend>
      {children}
    </fieldset>
  );
}
