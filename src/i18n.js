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
      search_placeholder: "Search for location",
      days: {
        Sun: "Sun",
        Mon: "Mon",
        Tue: "Tue",
        Wed: "Wed",
        Thu: "Thu",
        Fri: "Fri",
        Sat: "Sat",
      },
      footer: {
        item1: {
          title: "Weather in Bishkek Today",
          description:
            "Find out the exact weather forecast for Bishkek today: temperature, humidity, wind, and precipitation. Keep track of weather changes in Kyrgyzstan and be prepared for any conditions!",
        },
        item2: {
          title: "Weather Forecast in Kyrgyzstan",
          description:
            "The weather in Kyrgyzstan changes daily. Check the forecast for tomorrow, the week, and 10 days. Bishkek, Osh, Issyk-Kul — up-to-date data on temperature, precipitation, and wind.",
        },
        item3: {
          title: "Climate and Seasonal Weather",
          description:
            "Weather in Bishkek and Kyrgyzstan by season: summer heat, autumn rains, winter frosts. Follow the forecast to know what weather awaits you today and tomorrow!",
        },
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
        "drizzle.light.description": "Light drizzle weather",
        "drizzle.moderate": "Moderate Drizzle",
        "drizzle.moderate.description": "Moderate drizzle weather",
        "drizzle.dense": "Dense Drizzle",
        "drizzle.dense.description": "Dense drizzle weather",
        "rain.slight": "Slight Rain",
        "rain.slight.description": "Slight rain showers",
        "rain.moderate": "Moderate Rain",
        "rain.moderate.description": "Moderate rain showers",
        "rain.heavy": "Heavy Rain",
        "rain.heavy.description": "Heavy rain showers",
        "snowfall.slight": "Slight Snowfall",
        "snowfall.slight.description": "Light snowfall",
        "snowfall.moderate": "Moderate Snowfall",
        "snowfall.moderate.description": "Moderate snowfall",
        "snowfall.heavy": "Heavy Snowfall",
        "snowfall.heavy.description": "Heavy snowfall",
        "rainShowers.slight": "Slight Rain Showers",
        "rainShowers.slight.description": "Light rain showers",
        "rainShowers.moderate": "Moderate Rain Showers",
        "rainShowers.moderate.description": "Moderate rain showers",
        "rainShowers.violent": "Violent Rain Showers",
        "rainShowers.violent.description": "Severe rain showers",
        thunderstorm: "Thunderstorm",
        "thunderstorm.description": "Thunderstorm conditions",
        "thunderstorm.slightHail": "Thunderstorm with Slight Hail",
        "thunderstorm.slightHail.description": "Thunderstorm with light hail",
        "thunderstorm.heavyHail": "Thunderstorm with Heavy Hail",
        "thunderstorm.heavyHail.description": "Thunderstorm with intense hail",
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
      search_placeholder: "Поиск местоположения",
      days: {
        Sun: "Вс",
        Mon: "Пн",
        Tue: "Вт",
        Wed: "Ср",
        Thu: "Чт",
        Fri: "Пт",
        Sat: "Сб",
      },
      footer: {
        item1: {
          title: "Погода в Бишкеке сегодня",
          description:
            "Узнайте точный прогноз погоды в Бишкеке на сегодня: температура, влажность, ветер и осадки. Следите за изменениями погоды в Кыргызстане и будьте готовы к любым условиям!",
        },
        item2: {
          title: "Прогноз погоды в Кыргызстане",
          description:
            "Погода в Кыргызстане меняется ежедневно. Смотрите прогноз на завтра, неделю и 10 дней. Бишкек, Ош, Иссык-Куль — актуальные данные о температуре, осадках и ветре.",
        },
        item3: {
          title: "Климат и сезонная погода",
          description:
            "Погода в Бишкеке и Кыргызстане по сезонам: летняя жара, осенние дожди, зимние морозы. Следите за прогнозом, чтобы знать, какая погода ждёт вас сегодня и завтра!",
        },
      },
      weather: {
        clear: "Ясно",
        "clear.description": "Ясное небо",
        mainlyClear: "Пр. ясно",
        "mainlyClear.description": "Преимущественно ясное небо",
        partlyCloudy: "Облачно",
        "partlyCloudy.description": "Переменная облачность",
        overcast: "Пасмурно",
        "overcast.description": "Пасмурное небо",
        fog: "Туман",
        "fog.description": "Туманные условия",
        rimeFog: "Иней",
        "rimeFog.description": "Осадочный иней",
        "drizzle.light": "Легкая морось",
        "drizzle.light.description": "Легкая моросящая погода",
        "drizzle.moderate": "Ум. морось",
        "drizzle.moderate.description": "Умеренная моросящая погода",
        "drizzle.dense": "Сил. морось",
        "drizzle.dense.description": "Сильная моросящая погода",
        "rain.slight": "Легкий дождь",
        "rain.slight.description": "Легкий дождь",
        "rain.moderate": "Ум. дождь",
        "rain.moderate.description": "Умеренный дождь",
        "rain.heavy": "Сил. дождь",
        "rain.heavy.description": "Сильный дождь",
        "snowfall.slight": "Легкий снег",
        "snowfall.slight.description": "Легкий снегопад",
        "snowfall.moderate": "Ум. снег",
        "snowfall.moderate.description": "Умеренный снегопад",
        "snowfall.heavy": "Сил. снег",
        "snowfall.heavy.description": "Сильный снегопад",
        "rainShowers.slight": "Легкий ливень",
        "rainShowers.slight.description": "Легкие ливневые дожди",
        "rainShowers.moderate": "Ум. ливень",
        "rainShowers.moderate.description": "Умеренные ливневые дожди",
        "rainShowers.violent": "Сил. ливень",
        "rainShowers.violent.description": "Сильные ливневые дожди",
        thunderstorm: "Гроза",
        "thunderstorm.description": "Грозовая погода",
        "thunderstorm.slightHail": "Гроза, град",
        "thunderstorm.slightHail.description":
          "Гроза с небольшим количеством града",
        "thunderstorm.heavyHail": "Гроза, сильн. град",
        "thunderstorm.heavyHail.description":
          "Гроза с интенсивным выпадением града",
        unknown: "Неизвестно",
        "unknown.description": "Неизвестное погодное условие",
      },
    },
  },
  ky: {
    translation: {
      current_weather: "Учурдагы аба ырайы",
      extended_forecast: "Кеңири божомол",
      feels_like: "Окшош сезилет",
      humidity: "Нымдуулук",
      wind: "Шамал",
      pressure: "Басым",
      search_placeholder: "Жайгашкан жерди изде",
      days: {
        Sun: "Жш",
        Mon: "Дш",
        Tue: "Шш",
        Wed: "Шр",
        Thu: "Бш",
        Fri: "Жм",
        Sat: "Иш",
      },
      footer: {
        item1: {
          title: "Бүгүн Бишкектеги аба ырайы",
          description:
            "Бүгүн Бишкектеги так аба ырайын билип алыңыз: температура, нымдуулук, шамал жана жаан-чачын. Кыргызстандагы аба ырайынын өзгөрүүлөрүн көзөмөлдөп, каалаган шарттарга даяр болуңуз!",
        },
        item2: {
          title: "Кыргызстандагы аба ырайынын божомолу",
          description:
            "Кыргызстандагы аба ырайы күн сайын өзгөрүп турат. Эртеңкиге, жумага жана 10 күнгө болгон божомолду караңыз. Бишкек, Ош, Ысык-Көл — температура, жаан-чачын жана шамал боюнча актуалдуу маалыматтар.",
        },
        item3: {
          title: "Климат жана сезондук аба ырайы",
          description:
            "Бишкек жана Кыргызстандагы аба ырайынын сезонго жараша өзгөрүшү: жайкы ысык, күзгү жаан, кышкы суук. Бүгүн жана эртең кандай аба ырайы күтүп жатканын билүү үчүн божомолду караңыз!",
        },
      },
      weather: {
        clear: "Тунук",
        "clear.description": "Тунук асман",
        mainlyClear: "Негизинен тунук",
        "mainlyClear.description": "Негизинен тунук асман",
        partlyCloudy: "Жарым булуттуу",
        "partlyCloudy.description": "Жарым-жартылай булуттуу асман",
        overcast: "Булуттуу",
        "overcast.description": "Тыгыз булуттуу асман",
        fog: "Туман",
        "fog.description": "Туман шарттары",
        rimeFog: "Инек туман",
        "rimeFog.description": "Инеектүү туман",
        "drizzle.light": "Жеңил шилекей",
        "drizzle.light.description": "Жеңил шилекей аба ырайы",
        "drizzle.moderate": "Орточо шилекей",
        "drizzle.moderate.description": "Орточо шилекей аба ырайы",
        "drizzle.dense": "Калың шилекей",
        "drizzle.dense.description": "Калың шилекей аба ырайы",
        "rain.slight": "Жеңил жамгыр",
        "rain.slight.description": "Жеңил жамгыр жаады",
        "rain.moderate": "Орточо жамгыр",
        "rain.moderate.description": "Орточо жамгыр жаады",
        "rain.heavy": "Калың жамгыр",
        "rain.heavy.description": "Калың жамгыр жаады",
        "snowfall.slight": "Жеңил кар",
        "snowfall.slight.description": "Жеңил кар жаады",
        "snowfall.moderate": "Орточо кар",
        "snowfall.moderate.description": "Орточо кар жаады",
        "snowfall.heavy": "Калың кар",
        "snowfall.heavy.description": "Калың кар жаады",
        "rainShowers.slight": "Жеңил жамгыр төгүү",
        "rainShowers.slight.description": "Жеңил төгүп жааган жамгыр",
        "rainShowers.moderate": "Орточо жамгыр төгүү",
        "rainShowers.moderate.description": "Орточо төгүп жааган жамгыр",
        "rainShowers.violent": "Катуураак жамгыр төгүү",
        "rainShowers.violent.description": "Катуу жааган жамгыр",
        thunderstorm: "Чагылгандуу бороон",
        "thunderstorm.description": "Чагылгандуу шарттар",
        "thunderstorm.slightHail": "Чагылгандуу жана аз град",
        "thunderstorm.slightHail.description":
          "Чагылгандуу, аз град түшкөн аба ырайы",
        "thunderstorm.heavyHail": "Чагылгандуу жана катуу град",
        "thunderstorm.heavyHail.description":
          "Чагылгандуу жана көп град түшкөн аба ырайы",
        unknown: "Белгисиз",
        "unknown.description": "Белгисиз аба ырайынын шарттары",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ky", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
