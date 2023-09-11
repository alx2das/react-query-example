import { createBrowserRouter } from "react-router-dom";

import DashboardPage from "./DashboardPage";

export default createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />
    }
]);