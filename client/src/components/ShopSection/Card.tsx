import classNames from "classnames/bind";
import styles from "./card.module.scss";
import React from "react";

import tempImgX1 from "../../assets/images/temp-comp-x1.png";
import tempImgX2 from "../../assets/images/temp-comp-x2.png";
import { iCase } from "../Helpers/Icons";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const cn = classNames.bind(styles);
  const navigate = useNavigate();
  return (
    <div className={cn("card", "card-shop")} onClick={() => navigate("/")}>
      <img
        className={cn("image")}
        src={tempImgX1}
        srcSet={tempImgX2 + " 2x"}
        alt="computer"
      />
      <div className={cn("content")}>
        <div className={cn("header")}>
          <h4 className={cn("title")}>SKILLSTORM Venera S</h4>
          <strong className={cn("price")}>600 000 ₸</strong>
        </div>
        <ul className={cn("list")}>
          <li className={cn("list-item")}>
            <img className={cn("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cn("list-item-content")}>
              <p className={cn("item-type")}>Процессор</p>
              <p className={cn("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cn("list-item")}>
            <img className={cn("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cn("list-item-content")}>
              <p className={cn("item-type")}>Процессор</p>
              <p className={cn("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cn("list-item")}>
            <img className={cn("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cn("list-item-content")}>
              <p className={cn("item-type")}>Процессор</p>
              <p className={cn("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cn("list-item")}>
            <img className={cn("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cn("list-item-content")}>
              <p className={cn("item-type")}>Процессор</p>
              <p className={cn("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cn("list-item")}>
            <img className={cn("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cn("list-item-content")}>
              <p className={cn("item-type")}>Процессор</p>
              <p className={cn("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
          <li className={cn("list-item")}>
            <img className={cn("item-icon")} src={iCase} alt="shop-icon" />
            <div className={cn("list-item-content")}>
              <p className={cn("item-type")}>Процессор</p>
              <p className={cn("item-title")}>Intel Core i5-12600KF 3700 МГц</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
