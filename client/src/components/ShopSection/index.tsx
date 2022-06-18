import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { IShopSection } from "../../interfaces";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import Card from "./Card";

const ShopSection: FC<IShopSection> = (props) => {
  const { title, itemCount, link, apiUrl } = props;
  const cx = classNames.bind(styles);
  return (
    <section className={cx("shop-section")}>
      <div className={cx("title-box")}>
        <h2 className={cx("title")}>
          {title} <strong className={cx("count")}>{itemCount}</strong>
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
