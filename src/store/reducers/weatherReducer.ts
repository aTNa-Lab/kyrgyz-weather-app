import { createSlice } from '@reduxjs/toolkit';
import { ExtendedForecastData, HourlyForecastData, WeatherData } from '../../api/types';
import { fetchWeather, transformWeatherData } from '../fetchWeather';

export type WeatherState = {
  weatherData: WeatherData;
  extendedWeatherData: ExtendedForecastData[];
  hourlyWeatherData: HourlyForecastData[];
  isError: boolean;
}

const initialState: WeatherState = {
  weatherData: {
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    weather: {
      id: 200,
      main: '',
      description: '',
      icon: '',
    },
    wind: {
      deg: 0,
      speed: 0,
    },
  },
  extendedWeatherData: [],
  hourlyWeatherData: [],
  isError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const res = transformWeatherData(action.payload);
        state.weatherData = res.weather;
        state.extendedWeatherData = res.forecast;
        state.hourlyWeatherData = res.hourly;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default weatherSlice.reducer;
