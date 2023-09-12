import { FC } from "react";
import { Button } from "antd";
import { useUserQuery } from "../queries";
import { useChangeCompany } from "../hooks";

const Sidebar: FC = () => {
    const { data } = useUserQuery();
    const changeCompany = useChangeCompany();

    return (
        <div className="box sidebar">
            {data.companies.map((company: any) => (
                <Button
                    block
                    key={company.id}
                    type={company.isSelected ? "primary" : "default"}
                    onClick={() => changeCompany(company)}
                >
                    {company.name}
                </Button>
            ))}
        </div>
    );
};

export default Sidebar;