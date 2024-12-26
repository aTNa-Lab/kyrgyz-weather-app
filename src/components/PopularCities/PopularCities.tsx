import React from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import { AppDispatch } from "../../store/store";
import styled from "styled-components";

const popularCities = [
    {
      name: "Бишкек",
      lat: 42.8746,
      lng: 74.5698,
      image: "https://tripplanet.ru/wp-content/uploads/asia/kyrgyzstan/bishkek/dostoprimechatelnosti-bishkeka.jpg",
    },
    {
      name: "Ош",
      lat: 40.5134,
      lng: 72.8161,
      image: "https://asiamountains.net/assets/cache_image/assets/lib/resized/370/1600x1063_0x0_d0b.jpg",
    },
    {
      name: "Чолпон-Ата",
      lat: 42.6495,
      lng: 77.0830,
      image: "https://www.trtavaz.com.tr/uploads/photos/2022/01/25/46167e58bf994ef6968f5d956033ecf2.jpg?w=640",
    },
    {
      name: "Каракол",
      lat: 42.4907,
      lng: 78.3959,
      image: "https://www.karakol-ski.kg/assets/i/img1.jpg",
    },
    {
      name: "Нарын",
      lat: 41.4286,
      lng: 75.9917,
      image: "https://ekois.net/wp-content/uploads/2021/02/a42382d1cd5e7d33b74833d6be46d8c8.jpg",
    },
    {
      name: "Джалал-Абад",
      lat: 40.9330,
      lng: 73.0022,
      image: "https://economist.kg/content/images/wp-content/uploads/2022/06/economist.kg-28-1.png",
    },
    {
      name: "Талас",
      lat: 42.5186,
      lng: 72.2427,
      image: "https://www.open.kg/uploads/posts/2014-07/1405169362_elechek3.jpg",
    },
    {
      name: "Баткен",
      lat: 39.9636,
      lng: 69.9801,
      image: "https://eastroute.com/wp-content/uploads/2018/07/batken6.jpg",
    },
  ];

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin: 0 0 20px 0;
`;

const CityCard = styled.div<{ image: string }>`
  position: relative;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CityName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

const PopularCities = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCityClick = (city: { name: string; lat: number; lng: number }) => {
    dispatch(fetchWeather(city));
  };

  return (
    <CardContainer>
      {popularCities.map((city) => (
        <CityCard
          key={city.name}
          image={city.image}
          onClick={() => handleCityClick(city)}
        >
          <CityName>{city.name}</CityName>
        </CityCard>
      ))}
    </CardContainer>
  );
};

export default PopularCities;