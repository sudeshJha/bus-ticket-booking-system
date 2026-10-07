import { useQuery } from "@tanstack/react-query";
import { getCityRouteApi } from "../../services/apiRoute";

export const useStates = () => {
  const {
    isPending: gettingStates,
    data: routes,
    error,
  } = useQuery({
    queryKey: ["cityRoutes"],
    queryFn: getCityRouteApi,
  });

  return { gettingStates, routes, error };
};
