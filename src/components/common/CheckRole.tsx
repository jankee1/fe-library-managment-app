import { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserRole } from "types";
import { AuthContext } from "../../context/AuthProvider";
import { AdminNav, UserNav } from "./nav";

interface Props {
    role: UserRole
}

export const CheckRole = (props: Props) => {

    const {authUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(authUser?.role !== props.role) 
            navigate('/login', { state: { from: location.pathname } })
    }, [authUser?.role, navigate, location.pathname])

    return <>
        {authUser?.role === UserRole.User && <UserNav />}
        {authUser?.role === UserRole.Admin && <AdminNav />}
        <Outlet />
    </>
}