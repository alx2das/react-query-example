import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "../queries";

export const useCurrentCompany = () => {
    const { data: user } = useUserQuery();

    return user
        ?.companies
        ?.find((company: any) => company.isSelected) || null;
};