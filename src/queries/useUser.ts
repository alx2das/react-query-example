import { useQuery } from "@tanstack/react-query";
import { api, storage } from "../common";

export const useUserQuery = () => {
    const companyId = storage.get("companyId") || "company2";

    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await api.get("/get-user-info");
            return response.data;
        },

        onSuccess: (data) => {
            data.companies.forEach((company: any) => {
                company.isSelected = company.id === companyId;
            });

            return data;
        }
    });
};