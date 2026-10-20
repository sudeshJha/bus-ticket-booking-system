import { useQuery } from "@tanstack/react-query";
import { getOperatorRouteApi } from "../../services/apiOperatorRoute";
import { useParams } from "react-router-dom";

export const useOperatorRoutes = () => {
  const { id: operatorRouteId } = useParams();

  const {
    isPending: gettingOperatorRoute,
    data: operatorRoute,
    error,
  } = useQuery({
    queryKey: ["operatorRoute", operatorRouteId],
    queryFn: () => getOperatorRouteApi(operatorRouteId),
  });

  return { gettingOperatorRoute, operatorRoute, error };
};
