const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const userSignup = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Signup failed! Please try again.");
  }

  return response.json();
};
