import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import { SuggestionItem } from "./styled";
import { AppDispatch } from "../../store/store";
import { LocationData } from "../../api/types";

interface ISuggestionProps {
  label: string;
  item: LocationData;
  hideSuggestionFn: Function;
}

const Suggestion: React.FC<ISuggestionProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    dispatch(
      fetchWeather({
        lat: props.item.lat,
        lng: props.item.lon,
        name: props.item.name,
      })
    );
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

  return <SuggestionItem onClick={onClick}>{props.label}</SuggestionItem>;
};

export default Suggestion;
