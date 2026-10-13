import { useQuery } from "@tanstack/react-query";
import { getCityRouteApi } from "../../services/apiRoute";
import { useSearchParams } from "react-router-dom";

export const useCityRoutes = () => {
  const [searchParams] = useSearchParams();

  const sourceCity = searchParams.get("sourceCity");
  const destinationCity = searchParams.get("destinationCity");

  const {
    isPending: gettingCityRoutes,
    data: routes,
    error,
  } = useQuery({
    queryKey: ["cityRoutes", sourceCity, destinationCity],
    queryFn: () => getCityRouteApi(sourceCity, destinationCity),
    enabled: Boolean(sourceCity && destinationCity),
  });

  return { gettingCityRoutes, routes, error };
};
