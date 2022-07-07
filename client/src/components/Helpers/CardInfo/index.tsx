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
  const cn = classNames.bind(styles);
  return (
    <div className={cn("card", "card-info")}>
      <div className={cn("content")}>
        <h5 className={cn("title")}>{title}</h5>
        <div className={cn("children")}>
          {text && <p className={cn("text")}>{text}</p>}
          {children && children}
        </div>
        <div className={cn("links")}>
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
          <img className={cn("image")} src={image} alt="card-i" />
        </div>
      )}
    </div>
  );
};

export default CardInfo;
