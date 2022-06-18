import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const Container = (props: any) => {
  const cx = classNames.bind(styles);
  return <div className={cx("container")}>{props.children}</div>;
};

export default Container;
