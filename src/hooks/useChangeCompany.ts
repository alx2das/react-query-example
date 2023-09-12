import { useQueryClient } from "@tanstack/react-query";
import { storage } from "../common";

export const useChangeCompany = () => {
    const queryClient = useQueryClient();

    return (company: any) => {
        if (!company) return;

        const newCompanyId: string = company.id;
        const user = queryClient.getQueryData<any>(["user"]);

        storage.set("companyId", newCompanyId);

        queryClient.setQueryData(["user"], {
            ...user,
            companies: user.companies.map((company: any) => ({
                ...company,
                isCurrent: company.id === newCompanyId
            }))
        });
    };
};