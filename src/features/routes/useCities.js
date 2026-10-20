import { useQuery } from "@tanstack/react-query";
import { getCitiesApi } from "../../services/apiStateCity";

export const useCities = () => {
  const {
    isPending: gettingCities,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCitiesApi,
  });

  return { gettingCities, cities, error };
};
