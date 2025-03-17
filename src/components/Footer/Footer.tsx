import React from "react";
import { FooterContainer, FooterItemText, FooterItemTitle } from "./styled";
import { t } from "i18next";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ width: "30%" }}>
        <FooterItemTitle>{t("footer.item1.title")}</FooterItemTitle>
        <FooterItemText>{t("footer.item1.description")}</FooterItemText>
      </div>
      <div style={{ width: "30%" }}>
        <FooterItemTitle>{t("footer.item2.title")}</FooterItemTitle>
        <FooterItemText>{t("footer.item2.description")}</FooterItemText>
      </div>
      <div style={{ width: "30%" }}>
        <FooterItemTitle>{t("footer.item3.title")}</FooterItemTitle>
        <FooterItemText>{t("footer.item3.description")}</FooterItemText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
