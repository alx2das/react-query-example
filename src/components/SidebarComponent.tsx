import { FC, PropsWithChildren } from "react";

const SidebarComponent: FC<PropsWithChildren> = ({ children }) => {
    return <div className="box sidebar">{children}</div>;
};

export default SidebarComponent;