import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../common";

export const useUserMutate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (fullName: string) => {
            const user = queryClient.getQueryData<any>(["user"]);

            const response = await api.post("/user", {
                ...user,
                fullName
            });

            return response.data;
        },

        onSuccess: async (data: any) => {
            // queryClient.setQueryData(["user"], data);
            await queryClient.invalidateQueries(["user"]);
        },
        onError: () => {
            alert("Oops, something went wrong");
        }
    });
};