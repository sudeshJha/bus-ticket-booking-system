import { useQuery } from "@tanstack/react-query";
import { getOperatorRoutesApi } from "../../services/apiOperatorRoute";

export const useOperatorRoutes = () => {
  const {
    isPending: gettingOperatorRoutes,
    data: operatorRoutes,
    error,
  } = useQuery({
    queryKey: ["operatorRoutes"],
    queryFn: getOperatorRoutesApi,
  });

  return { gettingOperatorRoutes, operatorRoutes, error };
};
