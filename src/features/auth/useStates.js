import { useQuery } from "@tanstack/react-query";
import { getStatesApi } from "../../services/apiStateCity";

export const useStates = () => {
  const {
    isPending: gettingStates,
    data: user,
    error,
  } = useQuery({
    queryKey: ["states"],
    queryFn: getStatesApi,
    retry: false,
  });

  console.log(user);

  return { gettingStates, user, error };
};
