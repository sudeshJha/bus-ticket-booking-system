import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/apiUser";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: signingUp } = useMutation({
    mutationFn: (userData) => signup(userData),

    onSuccess: () => {
      toast.success();
    },
    onError: () => {},
  });
}
