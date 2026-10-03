import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiUser";
import toast from "react-hot-toast";
import { setLocalStorage } from "../../services/localStorage";

export default function useSignup() {
  const {
    mutate: login,
    isPending: loggingIn,
    error,
  } = useMutation({
    mutationFn: (userData) => loginApi(userData),
    onSuccess: (res) => {
      setLocalStorage(
        "authToken",
        `${res.response.tokenType} ${res.response.accessToken}`,
      );
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { login, loggingIn, error };
}
