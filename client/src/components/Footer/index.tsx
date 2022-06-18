import classNames from "classnames/bind";
import { Col, Container, Row } from "../Helpers/Layout";

import styles from "./styles.module.scss";
import logotype from "../../assets/images/logotype.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx("footer")}>
      <Container>
        <Row>
          <Col className={cx("content")}>
            <img src={logotype} alt="logotype" className={cx("logotype")} />
            <ul className={cx("links")}>
              <li>
                <Link className="link" to="/">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Публичная оферта
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Правила использования информации
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
