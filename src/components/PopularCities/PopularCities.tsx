import styled from "styled-components";
import { popularCities } from "../../api/cities";
import { CityData } from "../../api/types";
import { useParams } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 15px;
  margin: 0 0 20px 0;
`;

const CardButton = styled.a`
  align-items: center;
  appearance: none;
  background-color: #3eb2fd;
  background-image: linear-gradient(1deg, #4f58fd, #149bf3 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd, sans-serif;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, background-position 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-position: -20px -20px;
  }

  &:focus:not(:active) {
    box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 0.125em;
  }
`;

const CardText = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const PopularCities = () => {
  const { locale } = useParams<{ locale: string }>();

  return (
    <CardContainer>
      {Object.values(popularCities).map((city: CityData) => (
        <CardButton key={city.name} href={`/${locale}/city/${city.url}`}>
          <CardText>{city.name}</CardText>
        </CardButton>
      ))}
    </CardContainer>
  );
};

export default PopularCities;
