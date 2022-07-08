import axios from "axios";
import classNames from "classnames/bind";
import { useState } from "react";
import { CREATE_USER_URL } from "../../Constants";
import Button from "../Helpers/Button";
import Input from "../Helpers/Input";
import { Container, Row, Col } from "../Helpers/Layout";
import Modal from "../Helpers/Modal";
import ModalSuccess from "./ModalSuccess";

import styles from "./styles.module.scss";

const Registration = () => {
  const cn = classNames.bind(styles);
  const [login, setLogin] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const normalizeString = (name: string) =>
    name
      .split(" ")
      .filter((item) => item.length > 0)
      .map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
      .join(" ");

  const normalizeLogin = (string: string) => {
    const normalizeString = string.replace(/[^a-zA-Z]/gi, "");
    return normalizeString;
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      login,
      phone: phone.replaceAll(" ", ""),
      password,
      name: name.length > 0 ? normalizeString(name) : null,
      email: email.length > 0 ? email : null,
    };

    console.log(data);
    setShowSuccessModal(true);

    // axios({
    //   url: CREATE_USER_URL,
    //   method: "POST",
    //   data,
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <section className={cn("registration")}>
      {showSuccessModal && (
        <Modal className="modal-success">
          <ModalSuccess />
        </Modal>
      )}
      <form onSubmit={(event) => handleSubmitForm(event)}>
        <Container>
          <Row>
            <Col>
              <h1 className="title">Регистрация</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={cn("inputs-wrap")}>
                <span className={cn("inputs-label")}>Обязательные поля</span>
                <div className={cn("input-block")}>
                  <Input
                    label="Сотовый номер"
                    placeholder="Сотовый номер"
                    value={phone}
                    setValue={setPhone}
                    hint="Например: +7 701 123 45 67"
                  />
                </div>
                <div className={cn("input-block")}>
                  <Input
                    label="Логин"
                    placeholder="Логин"
                    value={login}
                    setValue={setLogin}
                    callback={normalizeLogin}
                    hint="Используйте только латинские буквы, не менее 4 символов"
                  />
                </div>
                <div className={cn("input-block")}>
                  <Input
                    label="Пароль"
                    placeholder="Пароль"
                    value={password}
                    setValue={setPassword}
                    type="password"
                    hint="Используйте только латинские буквы, не менее 6 символов"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={cn("inputs-wrap")}>
                <span className={cn("inputs-label")}>
                  Дополнительная информация
                </span>
                <div className={cn("input-block")}>
                  <Input
                    label="ФИО"
                    placeholder="ФИО"
                    value={name}
                    setValue={setName}
                    hint="Например: Иванов Иван Иванович"
                  />
                </div>
                <div className={cn("input-block")}>
                  <Input
                    label="E-mail"
                    placeholder="E-mail"
                    value={email}
                    setValue={setEmail}
                    hint="Например: my-mail@mail.com"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <div className={cn("button-wrap")}>
                <Button
                  type="submit"
                  text="Зарегистрироваться"
                  variant="primary"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </section>
  );
};

export default Registration;
