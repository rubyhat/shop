import { useState } from "react";
import { Col, Container, Row } from "../Helpers/Layout";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import logo from "../../assets/images/logotype.svg";
import Nav from "./Nav";
import Modal from "../Helpers/Modal";

const Header = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const [showModal, setShowModal] = useState(false);

  return (
    <header className={cx("header")}>
      <Container>
        <Row>
          <Col>
            <div className={cx("image-wrap")}>
              <img onClick={() => navigate("/")} src={logo} alt="logotype" />
            </div>
          </Col>
          <Col>
            {isMobile ? <div>burger</div> : <Nav setShowModal={setShowModal} />}
          </Col>
        </Row>
      </Container>
      {showModal && (
        <Modal className={cx("modal__auth")}>
          <div>hello modal</div>
          <button onClick={() => setShowModal(false)}>close</button>
        </Modal>
      )}
    </header>
  );
};

export default Header;
