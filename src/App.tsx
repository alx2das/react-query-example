import { FC } from "react";

import { CreateRoutes } from "./common";
import { routes } from "./pages/routes"

const App: FC = () => {
    return <CreateRoutes routes={routes} />;
};

export default App;