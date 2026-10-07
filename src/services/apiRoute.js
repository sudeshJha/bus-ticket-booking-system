import { getLocalStorage } from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCityRouteApi = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/city_route`, {
    method: "GET",
    headers: {
      Authorization: bearerToken,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data.response;
};
