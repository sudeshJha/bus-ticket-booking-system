import { getLocalStorage } from "./localStorage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signupApi = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    console.log(data.message);
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

export const signupOperatorApi = async (userData) => {
  const formData = new FormData();

  formData.append("userInfo.name", userData.name);
  formData.append("userInfo.email", userData.email);
  formData.append("userInfo.phone", userData.phone);
  formData.append("userInfo.password", userData.password);

  if (userData.gender) formData.append("gender", userData.gender);
  if (userData.address) formData.append("address", userData.address);
  if (userData.seaterBasePrice)
    formData.append("seaterBasePrice", userData.seaterBasePrice);
  if (userData.sleeperBasePrice)
    formData.append("sleeperBasePrice", userData.sleeperBasePrice);

  if (userData.license) formData.append("license", userData.license);
  if (userData.banner) formData.append("banner", userData.banner);

  const response = await fetch(`${API_BASE_URL}/operator/signup`, {
    method: "POST",
    body: formData,
  });

  const data = await response.text();

  if (!response.ok) {
    console.log(data.message);
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

export const loginApi = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};

export const getUserApi = async () => {
  const bearerToken = getLocalStorage("authToken");

  const response = await fetch(`${API_BASE_URL}/get_user`, {
    method: "GET",
    headers: {
      Authorization: bearerToken,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
};
