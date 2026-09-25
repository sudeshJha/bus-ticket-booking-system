import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/apiUser";

export function useSignup() {
  const { mutate: signup, isLoading: signingUp } = useMutation({
    mutationFn: (userData) => signup(userData),

    onSuccess: () => {},
    onError: () => {},
  });
}
