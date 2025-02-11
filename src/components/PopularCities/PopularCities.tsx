import styled from "styled-components";
import { popularCities } from "../../api/cities";
import { CityData } from "../../api/types";
import { useParams } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 20px;
  margin: 0 0 20px 0;
`;

const PopularCities = () => {
  const { locale } = useParams<{ locale: string }>();

  return (
    <CardContainer>
      {Object.values(popularCities).map((city: CityData) => (
        <a key={city.name} href={`/${locale}/city/${city.url}`}>
          {city.name}
        </a>
      ))}
    </CardContainer>
  );
};

export default PopularCities;
