import { FC } from "react";
import { Button, Divider } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

import { useUserMutate } from "../../queries";
import { random } from "../../common";

const SettingPage: FC = () => {
    const { isLoading, mutate } = useUserMutate();

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                <Button
                    loading={isLoading}
                    onClick={() => mutate(random.string())}
                >
                    Change username
                </Button>

                <Divider />
            </Content>
        </div>
    );
};

export default SettingPage;