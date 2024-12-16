const limit = 5;
const language = "ru";

export const fetchCities = async (search: string) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=${limit}&language=${language}&format=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    return [];
  }
};
