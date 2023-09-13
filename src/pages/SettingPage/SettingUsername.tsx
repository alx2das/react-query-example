import { FC } from "react";
import { Button } from "antd";

import { useUserMutate } from "../../queries";
import { random } from "../../common";

const SettingUsername: FC = () => {
    const { isLoading, mutate } = useUserMutate();
    const username = "Username_" + random.string();

    return (
        <Button loading={isLoading} onClick={() => mutate(username)}>
            Change username
        </Button>
    );
};

export default SettingUsername;