import { getLocalStorage } from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBusDeckTypes = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/deck_types`, {
    method: "GET",
    headers: {
      Authorization: bearerToken,
    },
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data.response;
};

export const getSeatLayoutTypes = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/seat_layout_types`, {
    method: "GET",
    headers: {
      Authorization: bearerToken,
    },
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data.response;
};

export const addBusApi = async (busData) => {
  const formData = new FormData();
  const bearerToken = getLocalStorage("authToken");

  formData.append("rtoNumber", busData.rtoNumber);
  formData.append("manufacturer", busData.manufacturer);
  formData.append("VIN", busData.VIN);
  formData.append("userInfo.password", busData);

  console.log(formData.values);

  // const response = await fetch(`${API_BASE_URL}/add_bus`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: bearerToken,
  //   },
  //   body: formData,
  // });
};
