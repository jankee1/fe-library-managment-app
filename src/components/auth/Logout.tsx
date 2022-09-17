import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export const Logout = () => {

    const {setAuthUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthUser(null)
        navigate('/')
    }

    return (
        <button type="button" onClick={handleLogout}>Logout</button>
    );
}