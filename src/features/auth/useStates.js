import { useQuery } from "@tanstack/react-query";
import { getStatesApi } from "../../services/apiStateCity";
import { getLocalStorage } from "../../services/localStorage";

export const useStates = () => {
  const {
    isPending: gettingStates,
    data: states,
    error,
  } = useQuery({
    queryKey: ["states"],
    queryFn: getStatesApi,
  });

  return { gettingStates, states, error };
};
