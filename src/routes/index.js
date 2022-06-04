import { Route, Routes } from "react-router";
import RequireAuth from "../authentication/requireAuth";
import SignIn from "../authentication/signin";
import Dashboard from "../views/Dashboard";
import ProtectedLayout from "../views/layouts/protectedLayout";
import PublicLayout from "../views/layouts/publicLayout";

export default function RouteConfig() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route exact path="/signin" element={<SignIn />}></Route>
            </Route>
            <Route path="/" element={<RequireAuth />}>
                <Route path="/" element={<ProtectedLayout />}>
                    <Route index element={<Dashboard/>}></Route>
                </Route>
            </Route>
        </Routes>
    )
}