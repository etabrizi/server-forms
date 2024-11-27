import { ReactNode } from "react";

export type IFieldset = {
  legend: string;
  ariaDescribedBy?: string;
  children: ReactNode;
};
