import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Helpers/Layout";

import page404 from "../../assets/images/page-404.svg";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const Page404 = () => {
  const cn = classNames.bind(styles);
  return (
    <section className={cn("page-404")}>
      <Container>
        <Row>
          <Col>
            <h1>Страница не найдена</h1>
            <p>
              Упс! Страница не найдена или была удалена, пожалуйста, вернитесь
              на{" "}
              <Link className="link" to="/">
                {" "}
                главную страницу
              </Link>
            </p>
            <img src={page404} alt="page-not-found" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Page404;
