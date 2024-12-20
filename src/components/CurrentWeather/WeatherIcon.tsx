import React from 'react';
import CloudyIcon from '../../assets/weather/cloudy.svg?react';
import HazeIcon from '../../assets/weather/haze.svg?react';
import HeavyRainIcon from '../../assets/weather/heavy-rain.svg?react';
import PartlyCloudyIcon from '../../assets/weather/partly-cloudy.svg?react';
import RainIcon from '../../assets/weather/rain.svg?react';
import SleetIcon from '../../assets/weather/sleet.svg?react';
import SnowIcon from '../../assets/weather/snow.svg?react';
import SunnyIcon from '../../assets/weather/sunny.svg?react';
import ThunderstormIcon from '../../assets/weather/thunderstorm.svg?react';


interface IWeatherIconProps {
  code: number;
  big?: boolean;
}

const mapWeatherCodeToIconCode = (code: number): number => {
  // Example WMO to WeatherIcon mapping
  if (code === 0) return 800; // Clear
  if (code === 1 || code === 2) return 801; // Partly Cloudy
  if (code === 3) return 803; // Cloudy
  if (code >= 45 && code <= 48) return 701; // Haze/Fog
  if (code >= 51 && code <= 55) return 300; // Drizzle
  if (code >= 61 && code <= 65) return 500; // Rain
  if (code >= 71 && code <= 75) return 600; // Snow
  if (code >= 95 && code <= 99) return 200; // Thunderstorm

  // Default to sunny if unknown
  return 800;
};

const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const parsedCode = mapWeatherCodeToIconCode(props.code)

  switch (parsedCode) {
    // Clear
    case 800:
      Icon = SunnyIcon;
      break;

    // Cloud
    case 801:
    case 802:
      Icon = PartlyCloudyIcon;
      break;
    case 803:
    case 804:
      Icon = CloudyIcon;
      break;

    // Rain
    case 500:
    case 501:
    case 520:
    case 521:
    case 511:
      Icon = RainIcon;
      break;
    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      Icon = HeavyRainIcon;
      break;

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = RainIcon;
      break;

    // Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      Icon = ThunderstormIcon;
      break;

    // Snow
    case 600:
    case 601:
    case 602:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = SnowIcon;
      break;
    case 611:
      Icon = SleetIcon;
      break;

    // Atmosphere
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      Icon = HazeIcon;
      break;

    default:
      Icon = SunnyIcon;
  }
  return props.big ? <Icon style={{ width: '100px', height: '100px' }} /> : <Icon />;
};

export default WeatherIcon;
