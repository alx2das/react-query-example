import { FC } from "react";
import { useUserQuery } from "../queries";
import {Link} from "react-router-dom";

const Header: FC = () => {
    const { data } = useUserQuery();

    return (
        <div className="box header">
            <div>{data.fullName}</div>
            <div>
                <Link to="/">Dashboard</Link>
                &nbsp;
                <Link to="/documents">Documents</Link>
                &nbsp;
                <Link to="/setting">Setting</Link>
            </div>
        </div>
    );
};

export default Header;