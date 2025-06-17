import type { FC } from "react";
import type { IFCProps } from "../../model/type";
import styles from "./Title.module.scss";
import classNames from "classnames";

export const Title: FC<IFCProps> = ({ children, className }) => {
  return <h1 className={classNames(styles["title"], className)}>{children}</h1>;
};
