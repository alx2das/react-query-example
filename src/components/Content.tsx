import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
    return <div className="box content">{children}</div>;
};

export default Content;