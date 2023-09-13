import { FC } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: FC = () => {
    return (
        <>
            <div>Navigation</div>
            <Outlet />
        </>
    );
};

export default DefaultLayout;