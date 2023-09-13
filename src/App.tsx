import { FC } from "react";

import { CreateRoutes } from "./common";
import { routes } from "./pages/routes";
import { useUserQuery } from "./queries";

const App: FC = () => {
    const { isLoading } = useUserQuery();

    if (isLoading) return <h3>Loading</h3>;
    return <CreateRoutes routes={routes} />;
};

export default App;