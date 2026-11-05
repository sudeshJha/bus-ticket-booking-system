import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addBusApi } from "../../services/apiBusLayout";

export default function useAddBus() {
  const {
    mutate: addBus,
    isPending: addingBus,
    error,
  } = useMutation({
    mutationFn: (busData) => addBusApi(busData),

    onSuccess: () => {
      toast.success("Successfully, added bus.");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { addBus, addingBus, error };
}
