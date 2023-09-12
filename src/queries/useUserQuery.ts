import { useQuery } from "@tanstack/react-query";
import { api, storage } from "../common";

export const useUserQuery = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await api.get(`/user`);
            return response.data;
        },

        select: (data) => {
            const selectedCompanyId =
                storage.get("companyId") ||
                data.companies?.[0]?.id;

            storage.set("companyId", selectedCompanyId);

            return {
                ...data,
                companies: data.companies.map((company: any) => ({
                    ...company,
                    isSelected: company.id === selectedCompanyId
                }))
            };
        }
    });
};