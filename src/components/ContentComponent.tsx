import { FC, PropsWithChildren } from "react";

const ContentComponent: FC<PropsWithChildren> = ({ children }) => {
    return <div className="box content">{children}</div>;
};

export default ContentComponent;