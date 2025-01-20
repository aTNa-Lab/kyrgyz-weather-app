import { useEffect, useCallback } from "react";
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

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: AppStore) => state.app.isLoading);

  const { city } = useParams<{ city: string }>();

  // Memoize the loadCityWeather function to prevent unnecessary re-creation
  const loadCityWeather = useCallback(() => {
    const cityKey = city?.toLowerCase() || "bishkek"; // Default to Bishkek if no city in URL
    const cityData = popularCities[cityKey];

    if (cityData) {
      dispatch(
        fetchWeather({
          lat: cityData.lat,
          lng: cityData.lng,
          name: cityData.name,
        })
      );
    } else {
      console.warn(`City "${city}" not found. Falling back to Bishkek.`);
      dispatch(
        fetchWeather({
          lat: 42.8746,
          lng: 74.5698,
          name: "Бишкек",
        })
      );
    }
  }, [city, dispatch]);

  // Ensure useEffect runs only when the `city` parameter changes
  useEffect(() => {
    if (city !== undefined) {
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