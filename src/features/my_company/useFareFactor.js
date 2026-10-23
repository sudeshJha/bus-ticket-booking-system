import { useQuery } from "@tanstack/react-query";
import { getFareFactorsApi } from "../../services/apiFareFactor";

export const useFareFactor = () => {
  const {
    isPending: gettingFareFactors,
    data: fareFactors,
    error,
  } = useQuery({
    queryKey: ["fareFactors"],
    queryFn: getFareFactorsApi,
    retry: false,
  });

  console.log(fareFactors);

  return { gettingFareFactors, fareFactors, error };
};
