import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../common";

export const useOnboardingQuery = (stepId?: string | undefined) => {
    const navigation = useNavigate();
    const { stepId: currentStepId } = useParams();

    const uniqueKey = stepId || currentStepId;

    return useQuery({
        queryKey: ["onboarding", uniqueKey || "root"],

        queryFn: async () => {
            const response = await api.get(`/onboarding`, {
                params: {
                    stepId
                }
            });
            return response.data[0];
        },

        onSuccess: (data) => {
            if (!uniqueKey) {
                navigation(`/onboarding/${data.stepId}`);
            }

            return data;
        }
    });
};