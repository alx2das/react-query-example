import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const OnboardingPage: FC = () => {
    return (
        <div className="container">
            <div>
                <Link to="/onboarding/onboarding1">onboarding1</Link>
                <Link to="/onboarding/onboarding2">onboarding2</Link>
                <Link to="/onboarding/onboarding3">onboarding3</Link>
            </div>

            <Outlet />
        </div>
    );
};

export default OnboardingPage;