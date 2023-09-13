import DashboardPage from "./DashboardPage";
import CompaniesPage from "./CompaniesPage";
import OnboardingPage from "./OnboardingPage";
import SettingPage from "./SettingPage";

export const routes = [
    {
        index: true,
        element: <DashboardPage />
    },
    {
        path: "/companies",
        element: <CompaniesPage />
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