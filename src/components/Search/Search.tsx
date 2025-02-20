import React, { useEffect, useRef, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import { fetchCities } from "./../../api/placeSuggestion";
import { useClickOutside } from "./../../hooks/useClickOutside";
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
  SearchResult,
} from "./styled";
import Suggestion from "./Suggestion";
import { AppDispatch } from "../../store/store";
import { LocationData } from "../../api/types";
import { t } from "i18next";

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const suggestionRef = useRef(null);
  const [suggestions, setSuggestions] = useState<LocationData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setShowSuggestions(true);
    fetchCities(searchTerm).then((res) => {
      console.log(res);

      setSuggestions(res);
    });
  }, [searchTerm]);

  useClickOutside(suggestionRef, () => setShowSuggestions(false));

  const onSearchInputClicked = () => {
    setShowSuggestions(true);
  };

  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const showPosition = (position: any) => {
    dispatch(
      fetchWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };
  return (
    <SearchElement>
      <SearchIcon />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={300}
        onChange={onSearchInputChanged}
        onClick={onSearchInputClicked}
        placeholder={t("search_placeholder")}
      />
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }}
      >
        <LocationIcon />
      </LocationButton>
      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {suggestions?.map((s, i) => (
            <Suggestion
              key={i}
              label={`${s.name}, ${s.country === "Киргизия" ? "Кыргызстан" : s.country}`}
              item={s}
              hideSuggestionFn={() => {
                setShowSuggestions(false);
              }}
            />
          ))}
        </SearchResult>
      )}
    </SearchElement>
  );
};

export default Search;
