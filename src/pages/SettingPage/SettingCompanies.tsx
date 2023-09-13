import { FC } from "react";
import { Button } from "antd";

import { useCompanyMutate } from "../../queries";
import { random } from "../../common";

const SettingCompanies: FC = () => {
    const { isLoading, mutate } = useCompanyMutate();

    const handleCreate = () => {
        mutate({
            id: random.string(),
            name: random.string()
        });
    };

    return (
        <Button loading={isLoading} onClick={handleCreate}>
            Create company
        </Button>
    );
};

export default SettingCompanies;