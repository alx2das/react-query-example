import { createBrowserRouter } from "react-router-dom";

import DocumentsPage from "./DocumentsPage";
import SettingPage from "./SettingPage";
import DashboardPage from "./DashboardPage";

export default createBrowserRouter([
    {
        path: "/documents",
        element: <DocumentsPage />
    },
    {
        path: "/setting",
        element: <SettingPage />
    },
    {
        path: "/",
        element: <DashboardPage />
    },
]);