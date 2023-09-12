import { FC } from "react";
import { Content, Header, Sidebar } from "../components";

const SettingPage: FC = () => {
    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>

            </Content>
        </div>
    );
};

export default SettingPage;