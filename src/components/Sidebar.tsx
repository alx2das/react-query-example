import { FC } from "react";
import { useUserQuery } from "../queries";
import { useChangeCompany } from "../hooks";

const Sidebar: FC = () => {
    // return <div className="box sidebar">Sidebar</div>;


    const { data: user } = useUserQuery();
    const changeCompany = useChangeCompany();

    return (
        <div className="box sidebar">
            {user?.companies.map((company: any) => (
                <div key={company.id}>
                    <button
                        onClick={() => changeCompany(company)}
                    >
                        {company.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;