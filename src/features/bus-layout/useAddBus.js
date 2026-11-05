import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addBusApi } from "../../services/apiBusLayout";

export default function useSignup() {
  const {
    mutate: signup,
    isPending: signingUp,
    error,
  } = useMutation({
    mutationFn: (busData) => addBusApi(busData),

    onSuccess: () => {
      toast.success("Successfully, added bus.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { signup, signingUp, error };
}
