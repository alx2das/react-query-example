import { useMutation } from "@tanstack/react-query";
import { api } from "../../common";

export const useAdvantageMutate = () => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await api.post("/advantage", data);
            return response.data;
        },
        onSuccess: (data) => {
            return data;
        },
        onError: (err) => {

        },
        onSettled: () => {
            // finally
        },

        retry: false,
        retryDelay: 5 * 60 * 1000,

        meta: {}
    })
};

