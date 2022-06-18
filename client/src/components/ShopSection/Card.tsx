import classNames from "classnames/bind";
import styles from "./card.module.scss";
import React from "react";

import tempImgX1 from "../../assets/images/temp-comp-x1.png";
import tempImgX2 from "../../assets/images/temp-comp-x2.png";
import { iCase } from "../Helpers/Icons";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  return (
    <div className={cx("card", "card-shop")} onClick={() => navigate("/")}>
      <img
        className={cx("image")}
        src={tempImgX1}
        srcSet={tempImgX2 + " 2x"}
        alt="computer"
      />
      <div className={cx("content")}>
        <div className={cx("header")}>
          <h4 className={cx("title")}>SKILLSTORM Venera S</h4>
          <strong className={cx("price")}>600 000 ₸</strong>
        </div>
        <ul className={cx("list")}>
          <li className={cx("list-item")}>
            <img className={cx("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cx("list-item-content")}>
              <p className={cx("item-type")}>Процессор</p>
              <p className={cx("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cx("list-item")}>
            <img className={cx("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cx("list-item-content")}>
              <p className={cx("item-type")}>Процессор</p>
              <p className={cx("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cx("list-item")}>
            <img className={cx("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cx("list-item-content")}>
              <p className={cx("item-type")}>Процессор</p>
              <p className={cx("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cx("list-item")}>
            <img className={cx("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cx("list-item-content")}>
              <p className={cx("item-type")}>Процессор</p>
              <p className={cx("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cx("list-item")}>
            <img className={cx("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cx("list-item-content")}>
              <p className={cx("item-type")}>Процессор</p>
              <p className={cx("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cx("list-item")}>
            <img className={cx("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cx("list-item-content")}>
              <p className={cx("item-type")}>Процессор</p>
              <p className={cx("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
