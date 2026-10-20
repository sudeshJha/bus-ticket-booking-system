import { useQuery } from "@tanstack/react-query";
import { getOperatorRoutesApi } from "../../services/apiOperatorRoute";
import { useParams } from "react-router-dom";

export const useOperatorRoutes = () => {
  const { id: operatorRouteId } = useParams();

  const {
    isPending: gettingOperatorRoute,
    data: operatorRoute,
    error,
  } = useQuery({
    queryKey: ["operatorRoute"],
    queryFn: getOperatorRouteApi,
  });

  return { gettingOperatorRoutes, operatorRoutes, error };
};
