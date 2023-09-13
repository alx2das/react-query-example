import { FC, PropsWithChildren } from "react";

const HeaderComponent: FC<PropsWithChildren> = ({ children }) => {
    return <div className="box header">{children}</div>;
};

export default HeaderComponent;