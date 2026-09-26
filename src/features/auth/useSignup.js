import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signupApi } from "../../services/apiUser";

export default function useSignup() {
  const {
    mutate: signup,
    isPending: signingUp,
    error,
  } = useMutation({
    mutationFn: (userData) => signupApi(userData),

    onSuccess: () => {
      toast.success("Successfully, signed up.");
      setTimeout(() => {
        toast.success(
          "Activate your account by clicking on the link shared in email",
        );
      }, 1000);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { signup, signingUp, error };
}
