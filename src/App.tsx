import { FC } from "react";
import { Spin } from "antd";

import { CreateRoutes } from "./common";
import { routes } from "./pages/routes";
import { useUserQuery } from "./queries";

const App: FC = () => {
    const { isLoading } = useUserQuery();

    if (isLoading) return <Spin size="large" className="m-load" />;
    return <CreateRoutes routes={routes} />;
};

export default App;