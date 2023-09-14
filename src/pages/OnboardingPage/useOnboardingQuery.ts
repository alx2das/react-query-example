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
            const { data } = await api.get(`/onboarding`, {
                params: {
                    stepId
                }
            });

            if (!uniqueKey) {
                navigation(`/onboarding/${data.stepId}`);
            }

            return data[0];
        }
    });
};