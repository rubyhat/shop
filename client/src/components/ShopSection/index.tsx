import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { IShopSection } from "../../interfaces";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import Card from "./Card";

const ShopSection: FC<IShopSection> = (props) => {
  const { title, itemCount, link, apiUrl } = props;
  const cn = classNames.bind(styles);
  return (
    <section className={cn("shop-section")}>
      <div className={cn("title-box")}>
        <h2 className={cn("title")}>
          {title} <strong className={cn("count")}>{itemCount}</strong>
        </h2>
        <Link className="link" to={link}>
          Посмотреть все
        </Link>
      </div>
      <Filters />
      <Card />
    </section>
  );
};

export default ShopSection;
