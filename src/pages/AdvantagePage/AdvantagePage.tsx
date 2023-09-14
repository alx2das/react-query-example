import { FC } from "react";

import { HeaderComponent, SidebarComponent, ContentComponent } from "../../components";
import { useAdvantageQuery } from "./useAdvantageQuery";
import { useAdvantageMutate } from "./useAdvantageMutate";


const AdvantagePage: FC = () => {
    const { isLoading, data } = useAdvantageQuery();

    return (
        <div className="container">
            <HeaderComponent />
            <SidebarComponent />

            <ContentComponent>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ContentComponent>
        </div>
    );
};

export default AdvantagePage;