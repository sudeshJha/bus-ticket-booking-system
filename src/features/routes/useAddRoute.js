import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signupApi, signupOperatorApi } from "../../services/apiUser";

export default function useSignup() {
  const {
    mutate: addRoute,
    isPending: addingRoute,
    error,
  } = useMutation({
    mutationFn: (operatorRoute) => signupOperatorApi(operatorRoute),

    onSuccess: () => {
      toast.success("Route added successfully.");
    },

    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { addRoute, addingRoute, error };
}
