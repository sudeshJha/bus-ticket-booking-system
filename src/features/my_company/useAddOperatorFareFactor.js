import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addOperatorFareFactorApi } from "../../services/apiFareFactor";

export default function useAddOperatorFareFactor() {
  const {
    mutate: addOperatorFareFactor,
    isPending: addingOperatorFareFactor,
    error,
  } = useMutation({
    mutationFn: ({ fareFactorCode, price }) =>
      addOperatorFareFactorApi(fareFactorCode, price),

    onSuccess: (data) => {
      console.log(data);
      toast.success("Operator Fare Factor added successfully.");
    },

    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { addOperatorFareFactor, addingOperatorFareFactor, error };
}
