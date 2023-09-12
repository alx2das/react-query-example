import { useQuery } from "@tanstack/react-query";
import { api } from "../common";
import { useCurrentCompany } from "../hooks";

export const useBannerQuery = () => {
    const companyId = useCurrentCompany()?.id

    return useQuery({
        queryKey: ["banner", companyId],
        queryFn: async () => {
            const { data } = await api.get("/banners");
            return data?.[companyId] || null;
        },

        enabled: Boolean(companyId)
    });
};