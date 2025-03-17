import React from "react";
import { FooterContainer, FooterItem } from "./styled";
import { t } from "i18next";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <h4>{t("footer.item1.title")}</h4>
        <h5>{t("footer.item1.description")}</h5>
      </FooterItem>
      <FooterItem>
        <h4>{t("footer.item2.title")}</h4>
        <h5>{t("footer.item2.description")}</h5>
      </FooterItem>
      <FooterItem>
        <h4>{t("footer.item3.title")}</h4>
        <h5>{t("footer.item3.description")}</h5>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
