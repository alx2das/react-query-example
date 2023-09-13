import { FC } from "react";

import { HeaderComponent } from "../../components";
import { useUserQuery } from "../../queries";

const Header: FC = () => {
    const { data } = useUserQuery();

    return (
        <HeaderComponent>
            {data.fullName}
        </HeaderComponent>
    );
};

export default Header;