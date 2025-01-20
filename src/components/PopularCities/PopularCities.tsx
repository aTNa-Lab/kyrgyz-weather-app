import styled from "styled-components";
import { popularCities } from "../../api/cities";
import { CityData } from "../../api/types";


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 20px;
  margin: 0 0 20px 0;
`;

const PopularCities = () => {
  return (
    <CardContainer>
      {Object.values(popularCities).map((city: CityData) => (
        <a
          key={city.name}
          href={city.url}
        >
          {city.name}
        </a>
      ))}
    </CardContainer>
  );
};

export default PopularCities;
