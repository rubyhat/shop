import classNames from "classnames/bind";
import { FC } from "react";

import styles from "./styles.module.scss";
import { ICardInfo } from "../../../interfaces";
import { Link } from "react-router-dom";

const CardInfo: FC<ICardInfo> = (props) => {
  const {
    title,
    text,
    link1_target,
    link1_text,
    link2_target,
    link2_text,
    image,
    children,
  } = props;
  const cx = classNames.bind(styles);
  return (
    <div className={cx("card", "card-info")}>
      <div className={cx("content")}>
        <h5 className={cx("title")}>{title}</h5>
        <div className={cx("children")}>
          {text && <p className={cx("text")}>{text}</p>}
          {children && children}
        </div>
        <div className={cx("links")}>
          <Link className="link" to={link1_target}>
            {link1_text}
          </Link>
          {link2_target && link2_text && (
            <Link className="link" to={link2_target}>
              {link2_text}
            </Link>
          )}
        </div>
      </div>
      {image && (
        <div className="image-wrap">
          <img className={cx("image")} src={image} alt="card-i" />
        </div>
      )}
    </div>
  );
};

export default CardInfo;
