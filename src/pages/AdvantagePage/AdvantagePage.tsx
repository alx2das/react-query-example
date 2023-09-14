import { FC } from "react";
import { Divider, Button } from "antd";

import { HeaderComponent, SidebarComponent, ContentComponent } from "../../components";
import { useAdvantageQuery } from "./useAdvantageQuery";
import { useAdvantageMutate } from "./useAdvantageMutate";
import { random } from "../../common";


const AdvantagePage: FC = () => {
    const { data } = useAdvantageQuery();
    const { isLoading, mutate } = useAdvantageMutate();

    const handleUpdate = () => {
        mutate({
            title: random.string(),
            message: random.string(),
            enabled: true
        });
    };

    return (
        <div className="container">
            <HeaderComponent />
            <SidebarComponent />

            <ContentComponent>
                <pre>{JSON.stringify(data, null, 2)}</pre>

                <Divider />

                <Button onClick={handleUpdate} loading={isLoading}>Update</Button>
            </ContentComponent>
        </div>
    );
};

export default AdvantagePage;