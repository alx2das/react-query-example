import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../common";
import { useUserQuery } from "./useUserQuery";

export const useUserMutation = () => {
    const queryClient = useQueryClient();
    const { data: user } = useUserQuery();

    return useMutation({
        mutationFn: async (fullName: string) => {
            const response = await api.post("/user", {
                ...user,
                fullName
            });

            return response.data;
        },
        onSuccess: async (data) => {
            // await queryClient.invalidateQueries(["user"]);
            queryClient.setQueryData(["user"], data);
        }
    });
};