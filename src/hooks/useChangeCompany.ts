import { useQueryClient, QueryClient } from "@tanstack/react-query";
import { storage } from "../common";

export const useChangeCompany = () => {
    const queryClient = useQueryClient()

    return (company: any) => {
        if (!company) return;

        const selectedCompanyId = company.id;
        const user = queryClient.getQueryData<any>(["user"]);

        storage.set("companyId", selectedCompanyId);

        queryClient.setQueryData(["user"], {
            ...user,
            companies: user?.companies.map((company: any) => ({
                ...company,
                isSelected: company.id === selectedCompanyId
            })) || []
        })
    };
};