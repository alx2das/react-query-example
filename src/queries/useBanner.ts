import { useQuery } from "@tanstack/react-query";
import { api } from "../common";
import { useCompany } from "../hooks";

export const useBannerQuery = () => {
    const company = useCompany();
    const companyId = company.id || null;

    return useQuery({
        queryKey: ["banners", companyId],
        queryFn: async () => {
            const { data } = await api.get(`/banners`);
            return data?.[companyId] || null;
        },

        enabled: Boolean(companyId)
    });
};