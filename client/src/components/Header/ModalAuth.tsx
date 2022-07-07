import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Helpers/Alert";
import Button from "../Helpers/Button";
import Input from "../Helpers/Input";
import styles from "./modalAuth.module.scss";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const ModalAuth = ({ setShowModal }: ModalProps) => {
  const cn = classNames.bind(styles);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(false);
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <form
      className={cn("modal-auth")}
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <div className={cn("modal__header")}>
        <h3>Вход</h3>
        <button
          className={cn("modal__button_close")}
          onClick={() => setShowModal(false)}
        >
          X
        </button>
      </div>
      <div className={cn("input-block")}>
        <Input
          className={error ? cn("modal__error") : ""}
          placeholder="Логин"
          label="Логин"
          value={login}
          setValue={setLogin}
        />
      </div>
      <div className={cn("input-block")}>
        <Input
          className={error ? cn("modal__error") : ""}
          placeholder="Пароль"
          label="Пароль"
          value={password}
          setValue={setPassword}
        />
      </div>
      {error && (
        <Alert variant="danger-outline">Неправильный логин или пароль</Alert>
      )}
      <Button disabled={false} text="Войти" variant="primary" />
      <Link
        onClick={() => setShowModal(false)}
        className={cn("modal__link", "link")}
        to="/"
      >
        Нет аккаунта?
      </Link>
    </form>
  );
};

export default ModalAuth;
