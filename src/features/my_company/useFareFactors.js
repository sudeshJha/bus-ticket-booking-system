import { useQuery } from "@tanstack/react-query";
import { getFareFactorsApi } from "../../services/apiFareFactor";

export const useFareFactors = () => {
  const {
    isPending: gettingFareFactors,
    data: fareFactors,
    error,
  } = useQuery({
    queryKey: ["fareFactors"],
    queryFn: getFareFactorsApi,
    retry: false,
  });

  return { gettingFareFactors, fareFactors, error };
};
