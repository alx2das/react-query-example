import { FC } from "react";
import { Button, Divider } from "antd";
import { useQueryClient } from "@tanstack/react-query";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

import { useUserMutate, useUserQuery } from "../../queries";
import { random } from "../../common";

const SettingPage: FC = () => {
    const queryClient = useQueryClient();
    const { data: user } = useUserQuery();

    const { isLoading, mutate } = useUserMutate();

    const resetBanner = async (companyId: string) => {
        await queryClient.invalidateQueries(["banner", companyId]);
    }
    const resetAllBanners = async () => {
        await queryClient.invalidateQueries(["banner"]);
    }

    const resetDocument = async (companyId: string) => {
        await queryClient.invalidateQueries(["document", companyId]);
    }
    const resetAllDocuments = async () => {
        await queryClient.invalidateQueries(["document"]);
    }

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

                {user.companies.map((company: any) => (
                    <div key={company.id}>
                        <Button onClick={() => resetBanner(company.id)}>
                            Reset banner for Company ({company.name})
                        </Button>
                        <Button onClick={() => resetDocument(company.id)}>
                            Reset document for Company ({company.name})
                        </Button>
                    </div>
                ))}

                <Divider />

                <div>
                    <Button onClick={resetAllBanners}>Reset ALL banners</Button>
                    <Button onClick={resetAllDocuments}>Reset ALL documents</Button>
                </div>

            </Content>
        </div>
    );
};

export default SettingPage;