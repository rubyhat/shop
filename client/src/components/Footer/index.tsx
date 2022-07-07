import classNames from "classnames/bind";
import { Col, Container, Row } from "../Helpers/Layout";

import styles from "./styles.module.scss";
import logotype from "../../assets/images/logotype.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const cn = classNames.bind(styles);
  return (
    <footer className={cn("footer")}>
      <Container>
        <Row>
          <Col className={cn("content")}>
            <img src={logotype} alt="logotype" className={cn("logotype")} />
            <ul className={cn("links")}>
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
