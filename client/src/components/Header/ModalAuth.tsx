import axios, { HeadersDefaults } from "axios";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_USER_URL } from "../../Constants";
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
    axios({
      url: LOGIN_USER_URL,
      method: "POST",
      data: { login, password },
    })
      .then((res) => {
        interface CommonHeaderProperties extends HeadersDefaults {
          Authorization: string;
        }
        axios.defaults.headers = {
          Authorization: `Bearer ${res.data.token}`,
        } as CommonHeaderProperties;
        console.log(res);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMsg(err.response.data.message);
      });
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
          type="password"
        />
      </div>
      {error && errorMsg && <Alert variant="danger-outline">{errorMsg}</Alert>}
      <Button disabled={false} text="Войти" variant="primary" />
      <Link
        onClick={() => setShowModal(false)}
        className={cn("modal__link", "link")}
        to="/registration"
      >
        Нет аккаунта?
      </Link>
    </form>
  );
};

export default ModalAuth;
