import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addOperatorRouteApi } from "../../services/apiRoute";
import { useNavigate } from "react-router-dom";

export default function useAddRoute() {
  const navigate = useNavigate();
  const {
    mutate: addRoute,
    isPending: addingRoute,
    error,
  } = useMutation({
    mutationFn: (operatorRoute) => addOperatorRouteApi(operatorRoute),

    onSuccess: (data) => {
      console.log(data);
      toast.success("Route added successfully.");
      navigate("/routes");
    },

    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { addRoute, addingRoute, error };
}
