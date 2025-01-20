import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { AppStore } from "./store/store";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./app.styled";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/city/:city" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
