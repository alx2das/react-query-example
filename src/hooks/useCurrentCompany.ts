import { useUserQuery } from "../queries";

export const useCurrentCompany = () => {
    const { data } = useUserQuery();

    return data
        ?.companies
        ?.find((company: any) => company.isSelected) || null;
};