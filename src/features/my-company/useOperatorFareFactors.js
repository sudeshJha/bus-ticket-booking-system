import { useQuery } from "@tanstack/react-query";
import { getOperatorFareFactorsApi } from "../../services/apiFareFactor";

export const useOperatorFareFactors = () => {
  const {
    isPending: gettingOperatorFareFactors,
    data: operatorFareFactors,
    error,
  } = useQuery({
    queryKey: ["operatorFareFactors"],
    queryFn: getOperatorFareFactorsApi,
  });

  return { gettingOperatorFareFactors, operatorFareFactors, error };
};
