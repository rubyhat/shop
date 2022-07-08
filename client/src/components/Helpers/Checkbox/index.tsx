import classNames from "classnames/bind";
import React, { FC } from "react";
import styles from "./styles.module.scss";

interface ICheckbox {
  children: React.ReactNode;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

const Checkbox: FC<ICheckbox> = ({ children, isChecked, setIsChecked }) => {
  const cn = classNames.bind(styles);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(event.target.checked);

  return (
    <label className={cn("checkbox")}>
      <input
        checked={isChecked}
        onChange={(event) => handleInputChange(event)}
        type="checkbox"
      />
      {children}
    </label>
  );
};

export default Checkbox;
