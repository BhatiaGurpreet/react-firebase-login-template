import { Outlet } from "react-router";

export default function PublicLayout(props) {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}