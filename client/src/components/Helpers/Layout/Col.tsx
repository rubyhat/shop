import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const Col = (props: any) => {
  const cx = classNames.bind(styles);
  return <div className={cx("col")}>{props.children}</div>;
};

export default Col;
