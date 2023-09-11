import { useQuery } from "@tanstack/react-query";
import { api } from "../common";

export const useUserQuery = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await api.get("/get-user-info");
            return response.data;
        }
    });
};