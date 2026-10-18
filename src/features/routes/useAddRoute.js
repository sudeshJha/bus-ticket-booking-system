import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addOperatorRouteApi } from "../../services/apiRoute";

export default function useAddRoute() {
  const {
    mutate: addRoute,
    isPending: addingRoute,
    error,
  } = useMutation({
    mutationFn: (operatorRoute) => addOperatorRouteApi(operatorRoute),

    onSuccess: (data) => {
      console.log(data);
      toast.success("Route added successfully.");
    },

    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { addRoute, addingRoute, error };
}
