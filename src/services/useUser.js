import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "./apiUser";

export const useUser = () => {
  const {
    isPending: gettingUser,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    retry: false,
  });

  console.log(user);

  return { gettingUser, user, error };
};
