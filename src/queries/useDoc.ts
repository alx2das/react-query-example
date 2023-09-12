import { useQuery } from "@tanstack/react-query";
import { api } from "../common";
import { useCurrentCompany } from "../hooks";

export const useDocQuery = () => {
    const company = useCurrentCompany();
    const companyId = company.id || null;

    return useQuery({
        queryKey: ["docs", companyId],
        queryFn: async () => {
            const { data } = await api.get(`/docs`);
            return data?.[companyId] || null;
        },

        enabled: Boolean(companyId)
    });
};