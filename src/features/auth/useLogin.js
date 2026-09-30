import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export default function useSignup() {
  const {
    mutate: login,
    isPending: loggingIn,
    error,
  } = useMutation({
    mutationFn: (userData) => loginApi(userData),
    onSuccess: () => {
      console.log();
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { login, loggingIn, error };
}
