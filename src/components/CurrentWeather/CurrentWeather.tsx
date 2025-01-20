import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HighIcon from '../../assets/high-icon.svg?react';
import HumidityIcon from '../../assets/humidity-icon.svg?react';
import LowIcon from '../../assets/low-icon.svg?react';
import PressureIcon from '../../assets/pressure-icon.svg?react';
import WindIcon from '../../assets/wind-icon.svg?react';
import { AppStore } from '../../store/store';
import { changeTempUnit } from '../../store/reducers/appReducer';
import { kmToMile, TempUnit } from '../../utils/unitConversion';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';
import WeatherIcon from './WeatherIcon';
import {
  CurrentWeatherStatus,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
} from './styled';
import Temperature from './Temperature';
import { useTranslation } from 'react-i18next';
import HourlyTemperatureChart from './HourlyTemperatureChart';

const CurrentWeather: React.FC = () => {
  const {
    weatherData: weather,
    hourlyWeatherData: hourly,
    isError,
  } = useSelector((store: AppStore) => store.weather);
  
  const {
    tempUnit: degreeType,
    isInitial,
  } = useSelector((store: AppStore) => store.app);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log('Cannot load weather for this place');
    }
  }, [isError]);

  const { t } = useTranslation();

  if (isInitial) return <></>;

  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SectionTitle>{t("current_weather")}</SectionTitle>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
        </div>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={weather.weather.id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{weather.weather.description}</h6>
        </CurrentWeatherStatus>

        <CurrentWeatherInfo>
          <FeelsLike>
            {t("feels_like")} <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> {t("humidity")}
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> {t("wind")}
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS ? weather.wind.speed : kmToMile(weather.wind.speed)}
              {degreeType === TempUnit.CELCIUS ? 'kph' : 'mph'}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> {t("pressure")}
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
      <HourlyTemperatureChart data={hourly} min={weather.main.temp_min} max={weather.main.temp_max} />
    </WeatherContainer>
  );
};

export default CurrentWeather;
