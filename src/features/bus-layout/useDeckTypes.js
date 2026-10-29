import { useQuery } from "@tanstack/react-query";
import { getBusDeckTypes } from "../../services/apiBusLayout";

export const useDeckTypes = () => {
  const {
    isPending: gettingDeckTypes,
    data: deckTypes,
    error,
  } = useQuery({
    queryKey: ["deckTypes"],
    queryFn: getBusDeckTypes,
  });

  console.log(deckTypes);

  return { gettingDeckTypes, deckTypes, error };
};
