import {useMutation, useQueryClient} from "@tanstack/react-query";
import {api} from "../common";

export const useCompanyMutate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, name }: any) => {
            const user = queryClient.getQueryData<any>(["user"]);

            user.companies.push({ id, name });

            const response = await api.post("/user", user);
            return response.data;
        },

        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data);
        },
        onError: () => {
            alert("Oops, something went wrong");
        }
    });
};