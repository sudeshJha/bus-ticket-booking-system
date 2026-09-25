import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userSignup } from "../../services/apiUser";

export default function useSignup() {
  const {
    mutate: signup,
    isLoading: signingUp,
    error,
  } = useMutation({
    mutationFn: (userData) => userSignup(userData),

    onSuccess: () => {
      toast.success("Successfully, signed up.");
      setTimeout(() => {
        toast.success(
          "Activate your account by clicking on the link shared in email",
        );
      }, 500);
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Signup Failed. Try again!");
    },
  });

  return { signup, signingUp, error };
}
