import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import logo from "../../assets/images/logotype.svg";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <header className={cx("header")}>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <div className={cx("image-wrap")}>
              <img onClick={() => navigate("/")} src={logo} alt="logotype" />
            </div>
          </Col>
          <Col xs={6} md={9}>
            {isMobile ? <div>burger</div> : <Nav />}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
