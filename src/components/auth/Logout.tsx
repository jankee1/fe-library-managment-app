import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { AuthContext } from "../../context/AuthProvider";

export const Logout = () => {

    const {setAuthUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const privateAxios = usePrivateAxios()

    const handleLogout = async () => {
        await privateAxios.get('/auth/logout');
        setAuthUser(() => null)
        navigate('/')
    }

    return (
        <button type="button" onClick={handleLogout}>Logout</button>
    );
}