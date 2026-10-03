import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "./apiUser";

export const useUser = () => {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    retry: false,
  });

  return { isPending, cabins, error };
};
