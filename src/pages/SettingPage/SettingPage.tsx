import { FC } from "react";
import { Divider } from "antd";

import Header from "../DashboardPage/Header";
import Sidebar from "../DashboardPage/Sidebar";
import Content from "../DashboardPage/Content";

import SettingUsername from "./SettingUsername";
import SettingCompanies from "./SettingCompanies";

const SettingPage: FC = () => {
    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                <SettingUsername />
                <Divider />
                <SettingCompanies />
            </Content>
        </div>
    );
};

export default SettingPage;