import { FC } from "react";
import { Button } from "antd";
import { random } from "../common";
import { Content, Header, Sidebar } from "../components";
import { useUserMutation } from "../queries";

const SettingPage: FC = () => {
    const { isLoading, mutate } = useUserMutation();

    const handleChange = async () => {
        mutate("FullName_" + random.string());
    };

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                <Button onClick={handleChange} loading={isLoading}>
                    Change fullName
                </Button>
            </Content>
        </div>
    );
};

export default SettingPage;