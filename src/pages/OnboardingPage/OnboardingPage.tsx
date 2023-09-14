import { FC, useEffect } from "react";
import { Button, Spin } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderComponent, SidebarComponent, ContentComponent } from "../../components";
import { useOnboardingQuery } from "./useOnboardingQuery";

const OnboardingPage: FC = () => {
    const { stepId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isLoading, data } = useOnboardingQuery(stepId);
    useOnboardingQuery(data?.prevStepId);

    const goToStep = (stepId: string) => {
        navigate(`/onboarding/${stepId}`);
    };

    useEffect(() => {
        return () => {
            // Clear storage when exiting onboarding
            queryClient.removeQueries(["onboarding"]);
        };
    }, []);

    return (
        <div className="container">
            <HeaderComponent />
            <SidebarComponent />

            <ContentComponent>
                {isLoading ? <Spin size="large" /> : <Outlet />}

                <div className="nav-btn">
                    <Button
                        onClick={() => goToStep(data?.prevStepId)}
                        disabled={!data?.prevStepId}
                    >
                        Prev
                    </Button>

                    <Button
                        onClick={() => goToStep(data?.nextStepId)}
                        disabled={!data?.nextStepId}
                    >
                        Next
                    </Button>
                </div>
            </ContentComponent>
        </div>
    );
};

export default OnboardingPage;