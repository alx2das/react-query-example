import { useQuery } from "@tanstack/react-query";
import { api, storage } from "../common";

export const useUserQuery = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await api.get("/user");
            return response.data;
        },

        select: (user: any) => {
            const companyId =
                storage.get("companyId") ||
                user.companies[0];

            return {
                ...user,
                companies: user.companies.map((company: any) => ({
                    ...company,
                    isSelected: company.id === companyId
                }))
            };
        }
    });
};