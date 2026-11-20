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
  formData.append("vin", busData.vin);
  formData.append("isActive", busData.isActive);
  for (const image of busData.images) {
    formData.append("images", image);
  }

  formData.append("busLayout.seaterRows", busData.seaterRows);
  formData.append("busLayout.deckType.code", busData.deckType);
  formData.append("busLayout.seatLayoutType.code", busData.seatLayoutType);
  formData.append(
    "busLayout.sleeperRows",
    busData.sleeperRows ? busData.sleeperRows : 0,
  );
  formData.append(
    "busLayout.backRowSeats",
    busData.backRowSeats ? busData.backRowSeats : 0,
  );

  if (Array.isArray(busData.busFeatures)) {
    busData.busFeatures.forEach((featureCode, index) => {
      formData.append(`busFeatures[${index}].fareFactor.code`, featureCode);
    });
  }

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // const response = await fetch(`${API_BASE_URL}/add_bus`, {
  //   method: "POST",
  //   headers: {
  //     Authorization: bearerToken,
  //   },
  //   body: formData,
  // });
};
