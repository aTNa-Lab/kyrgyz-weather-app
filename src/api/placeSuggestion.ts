const apiKey = "97f31a80d4509fc3e9fe758442e1d361";
const limit = 5;

export const fetchCities = async (search: string) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=${limit}&appid=${apiKey}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    return [];
  }
};