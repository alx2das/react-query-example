import { FC } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu } from "antd";


const items = [
    {
        key: "/",
        label: <Link to="/">Dashboard</Link>
    },
    {
        key: "/documents",
        label: <Link to="/documents">Documents</Link>
    },
    {
        key: "/onboarding",
        label: <Link to="/onboarding">Onboarding</Link>
    },
    {
        key: "/setting",
        label: <Link to="/setting">Setting</Link>
    },
    {
        key: "/advantage",
        label: <Link to="/advantage">Advantage</Link>
    },
];

const DefaultLayout: FC = () => {
    const location = useLocation();

    return (
        <>
            <Menu mode="horizontal" items={items} selectedKeys={[location.pathname]} />

            <div className="main_container">
                <Outlet />
            </div>
        </>
    );
};

export default DefaultLayout;