import { Navigate, Outlet, useLocation } from "react-router";
import useAuthHelper from "../customHooks/useAuth";

export default function RequireAuth() {

    let location = useLocation();
    let authHelper = useAuthHelper();

    if (!authHelper.isAuthenticated) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return (
        <Outlet />
    );
}