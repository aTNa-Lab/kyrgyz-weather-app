import { useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Forecast from "../components/Forecast/Forecast";
import Header from "../components/Header/Header";
import Spinner from "../components/ui/Spinner/Spinner";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import { AppDispatch, AppStore } from "../store/store";
import { fetchWeather } from "../store/fetchWeather";
import Search from "../components/Search/Search";
import PopularCities from "../components/PopularCities/PopularCities";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import { popularCities } from "../api/cities";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: AppStore) => state.app.isLoading);

  const { i18n } = useTranslation();
  const { locale, city } = useParams<{ locale: string; city: string }>();
  const hasFetched = useRef(false); // Prevent duplicate fetch in Strict Mode

  const loadCityWeather = useCallback(() => {
    const cityKey = city?.toLowerCase() || "bishkek"; // Default to Bishkek if no city in URL
    const cityData = popularCities[cityKey] ?? popularCities["bishkek"];

    dispatch(
      fetchWeather({
        lat: cityData.lat,
        lng: cityData.lng,
        name: cityData.name,
      })
    );
  }, [city, dispatch]);

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale); // Change language dynamically
    }
  }, [locale]);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true; // Mark as fetched
      loadCityWeather();
    }
  }, [city, loadCityWeather]);

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <LanguageSelector />
      <Search />
      <PopularCities />
      <CurrentWeather />
      <Forecast />
      <Footer />
    </>
  );
};

export default Home;