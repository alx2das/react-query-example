import { useQuery } from "@tanstack/react-query";
import { api } from "../common";
import { useCurrentCompany } from "../hooks";

export const useDocumentQuery = () => {
    const companyId = useCurrentCompany()?.id;

    return useQuery({
        queryKey: ["document", companyId],
        queryFn: async () => {
            const response = await api.get(`/documents?company=${companyId}`);
            return response?.data;
        },

        enabled: Boolean(companyId)
    });
};