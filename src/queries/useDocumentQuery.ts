import { useQuery } from "@tanstack/react-query";
import { api } from "../common";
import { useCurrentCompany } from "../hooks";

export const useDocumentQuery = () => {
    const companyId = useCurrentCompany()?.id

    return useQuery({
        queryKey: ["documents", companyId],
        queryFn: async () => {
            const { data } = await api.get("/documents");
            return data?.[companyId] || null;
        },

        enabled: Boolean(companyId)
    });
};