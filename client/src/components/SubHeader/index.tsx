import { useState } from "react";
import { Col, Container, Row } from "../Helpers/Layout";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import Modal from "../Helpers/Modal";
import Button from "../Helpers/Button";

const SubHeader = () => {
  const cn = classNames.bind(styles);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={cn("sub-header")}>
      {showModal && (
        <Modal className={cn("modal-city")}>
          <h3>Выбор города</h3>
          <p>
            В данный момент мы работаем только в городе{" "}
            <strong>Караганда</strong>, но уже очень скоро мы откроемся на весь{" "}
            <strong>Казахстан!</strong>
          </p>
          <Button
            onClick={() => setShowModal(false)}
            variant="primary"
            text="Продолжить"
          />
        </Modal>
      )}
      <Container>
        <Row>
          <Col>
            <div className="d-flex align-items-center justify-content-between">
              <button
                onClick={() => setShowModal(true)}
                className={cn("button")}
              >
                Караганда
              </button>
              <p>+7 (701) 123 45 67 | с 9:00 до 18:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubHeader;
