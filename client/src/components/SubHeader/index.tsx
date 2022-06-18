import React from "react";
import { Col, Container, Row } from "../Helpers/Layout";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const SubHeader = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("sub-header")}>
      <Container>
        <Row>
          <Col>
            <div className="d-flex align-items-center justify-content-between">
              <p>Караганда</p>
              <p>+7 (701) 123 45 67 | с 9:00 до 18:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubHeader;
