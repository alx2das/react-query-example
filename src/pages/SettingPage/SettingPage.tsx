import { FC } from "react";
import { Button } from "antd";

import Header from "../DashboardPage/Header";
import Sidebar from "../DashboardPage/Sidebar";
import Content from "../DashboardPage/Content";

import { random } from "../../common";
import { useUserMutate } from "../../queries";

const SettingPage: FC = () => {
    const { isLoading, mutate } = useUserMutate();
    const fullName = "FullName_" + random.string();

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                <Button loading={isLoading} onClick={() => mutate(fullName)}>
                    Change username
                </Button>
            </Content>
        </div>
    );
};

export default SettingPage;