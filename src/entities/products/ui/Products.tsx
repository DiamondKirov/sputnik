import type { FC } from "react";
import styles from "./Products.module.scss";
import { PRODUCT_LIST } from "../model/mock";
import classNames from "classnames";
import { ProductCard } from "../../../shared";

interface Props {
  className?: string;
}

export const Products: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles["products"], className)}>
      {PRODUCT_LIST.map((product, index) => {
        return (
          <ProductCard
            className={styles["products__item"]}
            key={index}
            {...product}
          />
        );
      })}
    </div>
  );
};
