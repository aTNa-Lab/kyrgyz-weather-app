export type WeatherData = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
};

export type ExtendedForecastData = {
  day: string;
  temp: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
  };
};

export type LocationData = {
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  country: string;
};

export type HourlyForecastData = {
  time: string,
  temp: number,
}

export type CityData = {
  name: string;
  lat: number;
  lng: number;
  url: string;
}