import { useUserQuery } from "../queries";

export const useCompany = () => {
    const { data } = useUserQuery();

    return data
        ?.companies
        ?.find((company: any) => company.isSelected) || null;
};