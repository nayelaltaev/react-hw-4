import axios from "axios";

export const getCountryApi = async () => {
  const value = await axios.get("https://restcountries.com/v3.1/region/europe");
  // axios.get("https://restcountries.com/v2/all");

  return value.data;
};
