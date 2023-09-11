import { FC } from "react";
import { useUserQuery, useBannerQuery } from "../queries";

const Header: FC = () => {
    const { data: user } = useUserQuery();
    const { data: banner, isLoading } = useBannerQuery();

    return (
        <div className="box header">
            <div>{user.fullName}</div>

            {!isLoading && banner && (
                <div>[{banner.status}] {banner.message}</div>
            )}
        </div>
    );
};

export default Header;