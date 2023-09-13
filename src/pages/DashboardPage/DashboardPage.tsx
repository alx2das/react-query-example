import { FC } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

import { useUserQuery } from "../../queries";

const DashboardPage: FC = () => {
    const { data } = useUserQuery();

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Content>
        </div>
    );
};

export default DashboardPage;