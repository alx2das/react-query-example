import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../common";

export const useUserMutate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (username: string) => {
            const user = queryClient.getQueryData<any>(["user"]);

            const { data } = await api.post("/user", {
                ...user,
                username
            });

            queryClient.setQueryData(["user"], data);
            await queryClient.invalidateQueries(["user"]);

            return data;
        }
    });
};