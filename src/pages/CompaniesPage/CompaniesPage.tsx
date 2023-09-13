import { FC } from "react";
import { Button } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

import { useCompanyMutate } from "../../queries";
import { random } from "../../common";

const CompaniesPage: FC = () => {
    const { isLoading, mutate } = useCompanyMutate();

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                <Button
                    loading={isLoading}
                    onClick={() => mutate({ id: random.string(), name: random.string() })}
                >
                    Create company
                </Button>
            </Content>
        </div>
    );
};

export default CompaniesPage;