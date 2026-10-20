import { getLocalStorage } from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getOperatorRoutesApi = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/operator_routes`, {
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
