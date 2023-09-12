import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { useUserQuery } from "./queries";
import router from "./pages/routes";

const App: FC = () => {
    const { isLoading } = useUserQuery();

    if (isLoading) return <h3>Loading</h3>;

    return <RouterProvider router={router} />;
};

export default App;