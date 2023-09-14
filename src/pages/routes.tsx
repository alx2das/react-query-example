import DashboardPage from "./DashboardPage";
import DocumentsPage from "./DocumentsPage";
import OnboardingPage from "./OnboardingPage";
import OnboardingStep from "./OnboardingPage/OnboardingStep";
import SettingPage from "./SettingPage";
import AdvantagePage from "./AdvantagePage";

export const routes = [
    {
        index: true,
        element: <DashboardPage />,
    },
    {
        path: "documents",
        element: <DocumentsPage />,
    },
    {
        path: "onboarding",
        element: <OnboardingPage />,
        children: [
            {
                path: ":stepId",
                element: <OnboardingStep />,
            }
        ]
    },
    {
        path: "setting",
        element: <SettingPage />,
    },
    {
        path: "advantage",
        element: <AdvantagePage />,
    },
];