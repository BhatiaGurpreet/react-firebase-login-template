import { Outlet } from "react-router";

export default function ProtectedLayout(props) {
    
    return (
        <div>
            This is protected layout
            <Outlet></Outlet>
        </div>
    )
}