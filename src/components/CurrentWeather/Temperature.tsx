import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/store";
import { celciusToFahrenheit, TempUnit } from "../../utils/unitConversion";

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = (props) => {
  // Directly access the `tempUnit` from the store without creating a new object
  const degreeType = useSelector((state: AppStore) => state.app.tempUnit);

  if (degreeType === TempUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;