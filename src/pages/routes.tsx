import DashboardPage from "./DashboardPage";
import DocumentsPage from "./DocumentsPage";
import OnboardingPage from "./OnboardingPage";
import SettingPage from "./SettingPage";

export const routes = [
    {
        index: true,
        key: "dashboard",
        element: <DashboardPage />
    },
    {
        path: "/documents",
        element: <DocumentsPage />
    },
    {
        path: "/onboarding",
        element: <OnboardingPage />
    },
    {
        path: "/setting",
        element: <SettingPage />
    }
];