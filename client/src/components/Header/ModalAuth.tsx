import classNames from "classnames/bind";
import { useState } from "react";
import Input from "../Helpers/Input";
import styles from "./modalAuth.module.scss";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const ModalAuth = ({ setShowModal }: ModalProps) => {
  const cn = classNames.bind(styles);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
          placeholder="Номер телефона"
          label="Номер телефона"
          value={login}
          setValue={setLogin}
        />
      </div>
      <div className={cn("input-block")}>
        <Input
          placeholder="Пароль"
          label="Пароль"
          value={password}
          setValue={setPassword}
        />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default ModalAuth;
