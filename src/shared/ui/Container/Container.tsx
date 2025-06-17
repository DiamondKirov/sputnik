import type { FC } from "react";
import type { IFCProps } from "../../model/type";
import styles from "./Container.module.scss";
import classNames from "classnames";

export const Container: FC<IFCProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles["container"], className)}>{children}</div>
  );
};
