import { useQuery } from "@tanstack/react-query";
import { getCitiesApi } from "../../services/apiStateCity";

export const useCities = () => {
  const {
    isPending: gettingCities,
    data: user,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCitiesApi,
  });

  console.log(user);

  return { gettingCities, user, error };
};
