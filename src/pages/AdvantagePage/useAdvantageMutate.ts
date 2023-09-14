import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../common";
import { AdvantageData } from "./types";

export const useAdvantageMutate = () => {
    const queryClient = useQueryClient();

    return useMutation<AdvantageData, null, AdvantageData>({
        mutationFn: async (data) => {
            const response = await api.post("/advantage_", data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.setQueryData(["advantage"], { ...data });
            return data;
        },
        onError: (err) => {

        },
        onSettled: () => {
            // finally
        },

        retry: false,
        retryDelay: 500,

        meta: {}
    })
};

