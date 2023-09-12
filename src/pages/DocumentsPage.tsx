import { FC } from "react";
import { Card } from "antd";
import { Header, Sidebar, Content } from "../components";
import { useBannerQuery, useDocumentQuery } from "../queries";

const DocumentsPage: FC = () => {
    const banner = useBannerQuery();
    const document = useDocumentQuery();

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <Content>
                {!banner.isLoading && (
                    <Card title="Banners">
                        <pre>{JSON.stringify(banner.data, null, 2)}</pre>
                    </Card>
                )}

                {!document.isLoading && (
                    <Card title="Documents">
                        <pre>{JSON.stringify(document.data, null, 2)}</pre>
                    </Card>
                )}
            </Content>
        </div>
    );
};

export default DocumentsPage;