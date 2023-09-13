import { FC } from "react";
import { List, Typography } from "antd";

import { SidebarComponent } from "../../components";
import { useUserQuery } from "../../queries";

const Sidebar: FC = () => {
    const { data } = useUserQuery();

    return (
        <SidebarComponent>
            <List
                dataSource={data.companies}
                renderItem={(item: any) => (
                    <List.Item key={item.id}>
                        <Typography.Text mark>[{item.isSelected ? "X" : "O"}]</Typography.Text>&nbsp;
                         {item.name}
                    </List.Item>
                )}
            />
        </SidebarComponent>
    );
};

export default Sidebar;