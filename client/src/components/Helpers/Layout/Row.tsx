import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const Row = (props: any) => {
  const { className } = props;
  const cx = classNames.bind(styles);
  return <div className={cx("row") + " " + className}>{props.children}</div>;
};

export default Row;
