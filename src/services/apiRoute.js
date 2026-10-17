import { getLocalStorage } from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCityRouteApi = async (sourceCity, destinationCity) => {
  if (!sourceCity || !destinationCity) {
    return;
  }

  const bearerToken = getLocalStorage("authToken");

  const url = new URL(`${API_BASE_URL}/city_route`);
  url.search = new URLSearchParams({
    sourceCity,
    destinationCity,
  }).toString();

  const response = await fetch(url, {
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

export const addOperatorRouteApi = async (operatorRoute) => {
  const response = await fetch(`${API_BASE_URL}/add_operator_route`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(operatorRoute),
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    console.log(data.message);
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};
