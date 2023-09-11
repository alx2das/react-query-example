import { FC, PropsWithChildren } from "react";
import { useDocQuery } from "../queries";

const Content: FC<PropsWithChildren> = ({ children }) => {
    // return <div className="box content">{children}</div>;

    const { data: doc, isLoading } = useDocQuery();

    return (
        <div className="box content">
            {!isLoading && doc && (
                <h2>{doc.name}</h2>
            )}
        </div>
    );
};

export default Content;