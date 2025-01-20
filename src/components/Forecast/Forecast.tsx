import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import ForecastItem from './ForecastItem';
import { ForecastContainer, ForecastItems, SectionTitle } from './styled';
import { useTranslation } from 'react-i18next';

const Forecast: React.FC = () => {
  const forecast = useSelector((state: AppStore) => state.weather.extendedWeatherData);
  const isInitial = useSelector((state: AppStore) => state.app.isInitial);

  const { t } = useTranslation();

  if (isInitial) return null;

  return (
    <ForecastContainer>
      <SectionTitle>{t("extended_forecast")}</SectionTitle>
      <ForecastItems>
        {forecast.map((item, i) => (
          <ForecastItem
            key={i}
            day={item.day}
            high={item.temp.temp_max}
            low={item.temp.temp_min}
            weatherCode={item.weather.id}
            main={item.weather.main}
            description={item.weather.description}
          />
        ))}
      </ForecastItems>
    </ForecastContainer>
  );
};

export default Forecast;