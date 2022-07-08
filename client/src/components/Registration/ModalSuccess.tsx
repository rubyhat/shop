import classNames from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Helpers/Button";
import styles from "./styles.module.scss";

const ModalSuccess = () => {
  const cn = classNames.bind(styles);
  return (
    <div className={cn("modal-success")}>
      <h3>Регистрация прошла успешно!</h3>
      <p>Войдите в свой профиль, используя только что созданный аккаунт</p>
      <Link to="/">
        <Button variant="primary" text="Продолжить" />
      </Link>
    </div>
  );
};

export default ModalSuccess;
