import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      current_weather: "Current weather",
      extended_forecast: "Extended Forecast",
      feels_like: "Feels like",
      humidity: "Humidity",
      wind: "Wind",
      pressure: "Pressure",
      days: {
        Sun: "Sun",
        Mon: "Mon",
        Tue: "Tue",
        Wed: "Wed",
        Thu: "Thu",
        Fri: "Fri",
        Sat: "Sat",
      },
      weather: {
        clear: "Clear",
        "clear.description": "Clear sky",
        mainlyClear: "Mainly Clear",
        "mainlyClear.description": "Mainly clear sky",
        partlyCloudy: "Partly Cloudy",
        "partlyCloudy.description": "Partly cloudy sky",
        overcast: "Overcast",
        "overcast.description": "Overcast sky",
        fog: "Fog",
        "fog.description": "Foggy conditions",
        rimeFog: "Rime Fog",
        "rimeFog.description": "Depositing rime fog",
        "drizzle.light": "Light Drizzle",
        "drizzle.moderate": "Moderate Drizzle",
        "drizzle.dense": "Dense Drizzle",
        "rain.slight": "Slight Rain",
        "rain.moderate": "Moderate Rain",
        "rain.heavy": "Heavy Rain",
        "snowfall.slight": "Slight Snowfall",
        "snowfall.moderate": "Moderate Snowfall",
        "snowfall.heavy": "Heavy Snowfall",
        "rainShowers.slight": "Slight Rain Showers",
        "rainShowers.moderate": "Moderate Rain Showers",
        "rainShowers.violent": "Violent Rain Showers",
        thunderstorm: "Thunderstorm",
        "thunderstorm.slightHail": "Thunderstorm with Slight Hail",
        "thunderstorm.heavyHail": "Thunderstorm with Heavy Hail",
        unknown: "Unknown",
        "unknown.description": "Unknown weather condition",
      },
    },
  },
  ru: {
    translation: {
      current_weather: "Погода сейчас",
      extended_forecast: "Прогноз на 5 дней",
      feels_like: "Ощущается как",
      humidity: "Влажность",
      wind: "Ветер",
      pressure: "Давление",
      days: {
        Sun: "Воскр",
        Mon: "Пон",
        Tue: "Втор",
        Wed: "Ср",
        Thu: "Четв",
        Fri: "Пят",
        Sat: "Суб",
      },
      weather: {
        clear: "Ясно",
        "clear.description": "Ясное небо",
        mainlyClear: "Преимущественно ясно",
        "mainlyClear.description": "Преимущественно ясное небо",
        partlyCloudy: "Переменная облачность",
        "partlyCloudy.description": "Переменная облачность",
        overcast: "Пасмурно",
        "overcast.description": "Пасмурное небо",
        fog: "Туман",
        "fog.description": "Туманные условия",
        rimeFog: "Осадочный иней",
        "rimeFog.description": "Осадочный иней",
        "drizzle.light": "Легкая морось",
        "drizzle.moderate": "Умеренная морось",
        "drizzle.dense": "Сильная морось",
        "rain.slight": "Легкий дождь",
        "rain.moderate": "Умеренный дождь",
        "rain.heavy": "Сильный дождь",
        "snowfall.slight": "Легкий снегопад",
        "snowfall.moderate": "Умеренный снегопад",
        "snowfall.heavy": "Сильный снегопад",
        "rainShowers.slight": "Легкие ливни",
        "rainShowers.moderate": "Умеренные ливни",
        "rainShowers.violent": "Сильные ливни",
        thunderstorm: "Гроза",
        "thunderstorm.slightHail": "Гроза с небольшим градом",
        "thunderstorm.heavyHail": "Гроза с сильным градом",
        unknown: "Неизвестно",
        "unknown.description": "Неизвестное погодное условие",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
