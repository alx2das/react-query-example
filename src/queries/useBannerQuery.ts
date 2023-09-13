import { useQuery } from "@tanstack/react-query";
import { api } from "../common";
import { useCurrentCompany } from "../hooks";

export const useBannerQuery = () => {
    const companyId = useCurrentCompany()?.id;

    return useQuery({
        queryKey: ["banner", companyId],
        queryFn: async () => {
            const response = await api.get(`/banners?company=${companyId}`);
            return response?.data;
        },

        enabled: Boolean(companyId)
    });
};