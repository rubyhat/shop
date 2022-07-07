import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface IAlert {
  children: React.ReactNode;
  variant: string;
  className?: string;
}

const Alert: FC<IAlert> = ({ children, variant, className }) => {
  const cn = classNames.bind(styles);

  const rootClasses = className
    ? ["alert", ...className.split(" ")]
    : ["alert"];
  rootClasses.push(`alert_${variant}`);

  return <div className={cn(rootClasses)}>{children}</div>;
};

export default Alert;
