import classNames from "classnames/bind";
import styles from "./modalAuth.module.scss";

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
}

const ModalAuth = ({ setShowModal }: ModalProps) => {
  const cn = classNames.bind(styles);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("yep");
  };

  return (
    <form onSubmit={(event) => handleFormSubmit(event)}>
      <button onClick={() => setShowModal(false)}>X</button>
      <h3>Авторизация</h3>
      <div className="input-block">
        <label htmlFor="">Логин</label>
        <input type="text" />
      </div>
      <div className="input-block">
        <label htmlFor="">Пароль</label>
        <input type="password" />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default ModalAuth;
