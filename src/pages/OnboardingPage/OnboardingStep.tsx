import { FC } from "react";
import { useOnboardingQuery } from "./useOnboardingQuery";

const OnboardingStep: FC = () => {
    const { data } = useOnboardingQuery();

    return (
        <>
            <h2>{data?.data?.title}</h2>
            <h4>{data?.data?.message}</h4>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default OnboardingStep;