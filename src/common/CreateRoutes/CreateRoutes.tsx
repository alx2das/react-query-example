import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../Layouts";

type Props = {
    routes: any[]
};

const CreateRoutes: FC<Props> = ({ routes }) => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                {routes.map((route: any) => (
                    <Route
                        key={route.element}
                        index={route?.index}
                        path={route?.path}
                        element={route.element}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default CreateRoutes;