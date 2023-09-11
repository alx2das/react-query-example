import { FC } from "react";
import { useUserQuery } from "../queries";
import { Header, Sidebar, Content } from "../components";

const DashboardPage: FC = () => {
    const { isLoading, isError, data } = useUserQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

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