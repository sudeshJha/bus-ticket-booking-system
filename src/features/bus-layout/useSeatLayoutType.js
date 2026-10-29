import { useQuery } from "@tanstack/react-query";
import { getSeatLayoutTypes } from "../../services/apiBusLayout";

export const useSeatLayoutTypes = () => {
  const {
    isPending: gettingSeatLayoutTypes,
    data: seatLayoutTypes,
    error,
  } = useQuery({
    queryKey: ["seatLayoutTypes"],
    queryFn: getSeatLayoutTypes,
  });

  return { gettingSeatLayoutTypes, seatLayoutTypes, error };
};
