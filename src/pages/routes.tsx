import DashboardPage from "./DashboardPage";
import DocumentsPage from "./DocumentsPage";
import OnboardingPage from "./OnboardingPage";
import SettingPage from "./SettingPage";

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
                path: "onboarding1",
                element: <h1>onboarding1</h1>,
            },
            {
                path: "onboarding2",
                element: <h1>onboarding2</h1>,
            },
            {
                path: "onboarding3",
                element: <h1>onboarding3</h1>,
            },
            {
                path: "onboarding4",
                element: <h1>onboarding4</h1>,
            },
        ]
    },
    {
        path: "setting",
        element: <SettingPage />,
    },
];