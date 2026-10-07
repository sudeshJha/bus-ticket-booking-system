import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getStatesApi = async () => {
  // check if states exist in local storage
  removeLocalStorage("states");
  const states = getLocalStorage("states");

  // if yes then send from local storage
  if (states) {
    return JSON.parse(states);
  }

  // if state not in localstorage then fetch from backend
  const response = await fetch(`${API_BASE_URL}/states`, {
    method: "GET",
  });

  //   save state to local storage after fetching
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  setLocalStorage("states", data.response);
  return data.response;
};

export const getCitiesApi = async () => {
  // check if states exist in local storage
  removeLocalStorage("cities");
  const cities = getLocalStorage("cities");

  // if yes then send from local storage
  if (cities) {
    return JSON.parse(cities);
  }

  // if state not in localstorage then fetch from backend
  const response = await fetch(`${API_BASE_URL}/cities`, {
    method: "GET",
  });

  //   save state to local storage after fetching
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  setLocalStorage("cities", data.response);
  return data.response;
};
