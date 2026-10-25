import { getLocalStorage } from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getFareFactorsApi = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/fare_factors`, {
    method: "GET",
    headers: {
      Authorization: bearerToken,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  console.log(data.response);

  return data.response;
};

export const getOperatorFareFactorsApi = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/operator_fare_factors`, {
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

export const addOperatorFareFactorApi = async (fareFactorCode, price) => {
  const bearerToken = getLocalStorage("authToken");

  const operatorFareFactor = {
    fareFactor: {
      code: fareFactorCode,
    },
    price,
  };

  console.log(operatorFareFactor);

  const response = await fetch(`${API_BASE_URL}/add_operator_fare_factor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: bearerToken,
    },
    body: JSON.stringify(operatorFareFactor),
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    console.log(data.message);
    throw new Error(data.message || "Something went wrong!");
  }

  console.log(data);

  return data;
};
