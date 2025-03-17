import React from "react";
import { Subtitle, Title } from "./styed";

const Header: React.FC = () => {
  return (
    <div style={{ paddingBottom: 18 }}>
      <Title>Прогноз погоды в Бишкеке и в Кыргызстане</Title>
      <Subtitle>
        Точные прогнозы погоды для Кыргызстана, с учетом местных климатических
        особенностей.
      </Subtitle>
    </div>
  );
};

export default Header;
