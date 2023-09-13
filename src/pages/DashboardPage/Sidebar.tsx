import { FC } from "react";
import { List, Button } from "antd";

import { SidebarComponent } from "../../components";
import { useUserQuery } from "../../queries";
import { useChangeCompany } from "../../hooks";

const Sidebar: FC = () => {
    const { data } = useUserQuery();
    const changeCompany = useChangeCompany();

    return (
        <SidebarComponent>
            <List
                dataSource={data.companies}
                renderItem={(company: any) => (
                    <List.Item key={company.id}>
                        <Button
                            type={company.isSelected ? "primary" : "default"}
                            onClick={() => changeCompany(company)}
                        >
                            {company.name}
                        </Button>
                    </List.Item>
                )}
            />
        </SidebarComponent>
    );
};

export default Sidebar;