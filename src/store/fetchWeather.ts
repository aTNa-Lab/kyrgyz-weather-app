import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtendedForecastData, HourlyForecastData, WeatherData } from "../api/types";
import { getNextSevenDays } from "../utils/dateUtils";
import { kelvinToCelcius } from "../utils/unitConversion";
import { setIsInitial, setIsLoading } from "./reducers/appReducer";
import { t } from "i18next";
import {
  fetchWeatherData,
  fetchExtendedForecastData,
  fetchHourlyForecastData,
} from "../api/openMeteo";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (
    city: { lat: number; lng: number; name?: string },
    { dispatch, rejectWithValue, fulfillWithValue }
  ) => {
    dispatch(setIsLoading(true));

    try {
      const res = await Promise.all([
        fetchWeatherData(city),
        fetchExtendedForecastData(city),
        fetchHourlyForecastData(city),
      ]);
      dispatch(setIsLoading(false));

      if (res[0].cod === 200) {
        dispatch(setIsInitial(false));
        return res;
      }
      return rejectWithValue(res[0].message);
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error");
    }
  }
);

export const transformWeatherData = (
  res: any
): {
  weather: WeatherData;
  forecast: ExtendedForecastData[];
  hourly: HourlyForecastData[];
} => {
  const weather = res[0] as WeatherData;
  const forecast: ExtendedForecastData[] = [];
  const hourly: HourlyForecastData[] = [];

  weather.main = {
    ...weather.main,
    temp: weather.main.temp,
    feels_like: weather.main.feels_like,
    temp_max: weather.main.temp_max,
    temp_min: weather.main.temp_min,
  };

  const next7Days = getNextSevenDays();

  res[1].list.forEach((i: any, index: number) => {
    forecast.push({
      day: next7Days[index],
      temp: {
        temp_max: i.temp.temp_max,
        temp_min: i.temp.temp_min,
      },
      weather: {
        id: i.weather.id,
        main: i.weather.main,
        description: i.weather.description,
      },
    });
  });

  res[2].hourly.forEach((i: any, index: number) => {
    if (index % 3 === 0) { // Only push every 3rd hour's data
      hourly.push({
        time: i.time,
        temp: i.temp
      });
    }
  });

  return {
    weather,
    forecast,
    hourly,
  };
};
