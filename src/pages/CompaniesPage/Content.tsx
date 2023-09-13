import { FC, PropsWithChildren } from "react";
import { ContentComponent } from "../../components";

const Content: FC<PropsWithChildren> = ({ children }) => {
    return <ContentComponent>{children}</ContentComponent>;
};

export default Content;