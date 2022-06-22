import React, { useState } from "react";
import { Container, Row, Col } from "../Helpers/Layout";

import CardInfo from "../Helpers/CardInfo";
import avatar from "../../assets/images/avatar.svg";
import ShopSection from "../ShopSection";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col>
            <CardInfo
              title={"Привет"}
              text="Получай бонусы и спецпредложения,
сохраняй и отслеживай заказы"
              link1_text="Перейти в профиль"
              link1_target="/"
              link2_text="Мои заказы"
              link2_target="/"
              image={avatar}
            />
          </Col>
          <Col>
            <CardInfo
              title={"Выбери свой ПК"}
              text="Выбери компьютер для работы или
              развлечений"
              link1_text="Офисные компьютеры"
              link1_target="/"
              link2_text="Игровые компьютеры"
              link2_target="/"
            />
          </Col>
          <Col>
            <CardInfo title={"Акции"} link1_text="Посмотреть" link1_target="/">
              <p>
                Скидки и предложения{" "}
                <span style={{ color: "#86868b", fontWeight: "700" }}>3</span>
              </p>
            </CardInfo>
          </Col>
        </Row>
        <Row>
          <Col>
            <ShopSection title="Игровые компьютеры" itemCount={119} link="/" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
