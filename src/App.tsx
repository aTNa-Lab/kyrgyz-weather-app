import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { AppStore } from "./store/store";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./app.styled";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageRedirect = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage") || "ky"; // Default to Kyrgyz
    i18n.changeLanguage(savedLanguage);
    navigate(`/${savedLanguage}`, { replace: true });
  }, []);

  return null;
};

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to persisted or default language */}
          <Route path="/" element={<LanguageRedirect />} />

          <Route path="/:locale" element={<Home />} />
          <Route path="/:locale/city/:city" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
