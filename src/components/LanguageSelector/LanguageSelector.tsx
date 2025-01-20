import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSelectorContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 1000;
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.$active ? "#007bff" : "#333")};
  cursor: pointer;
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  font-size: inherit;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const LanguageSeparator = styled.span`
  color: #999;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageButton
        onClick={() => handleLanguageChange("ky")}
        $active={i18n.language === "ky"}
      >
        🇰🇬 ky
      </LanguageButton>
      <LanguageSeparator>/</LanguageSeparator>
      <LanguageButton
        onClick={() => handleLanguageChange("ru")}
        $active={i18n.language === "ru"}
      >
        🇷🇺 ru
      </LanguageButton>
      <LanguageSeparator>/</LanguageSeparator>
      <LanguageButton
        onClick={() => handleLanguageChange("en")}
        $active={i18n.language === "en"}
      >
        🇬🇧 en
      </LanguageButton>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
