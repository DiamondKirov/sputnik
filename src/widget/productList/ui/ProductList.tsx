import type { FC } from "react";
import { Container, Title } from "../../../shared";
import { Products } from "../../../entities";
import styles from "./ProductList.module.scss";

interface Props {
  title?: string;
}

export const ProductList: FC<Props> = ({ title }) => {
  return (
    <Container className={styles["product-list"]}>
      {title && (
        <Title className={styles["product-list__title"]}>{title}</Title>
      )}
      <Products className={styles["product-list__products"]} />
    </Container>
  );
};
