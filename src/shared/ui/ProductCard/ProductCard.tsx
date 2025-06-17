import type { FC } from "react";
import styles from "./ProductCard.module.scss";
import type { IProduct } from "../../model/type";
import classNames from "classnames";
import { getCurrentPrice } from "../../lib";

interface Props extends IProduct {
  className?: string;
}

export const ProductCard: FC<Props> = ({
  title,
  origin,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={classNames(styles["product-card"], className)}>
      <img
        className={styles["product-card__image"]}
        alt={title}
        src={imageUrl}
      />
      <div className={styles["product-card__info"]}>
        <p className={styles["product-card__title"]}>{title}</p>
        <div className={styles["product-card__info-wrapper"]}>
          <p className={styles["product-card__price"]}>
            {getCurrentPrice(price.current, price.currency)}
          </p>
          <p className={styles["product-card__origin"]}>{origin}</p>
        </div>
      </div>
    </div>
  );
};
