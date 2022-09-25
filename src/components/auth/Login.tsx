import { useContext, useState } from "react";
import { publicAxios } from "../../api/axios";
import { LoginResponse, USER_INPUT_EMAIL_MAX_LENGTH, USER_INPUT_PASSWORD_MAX_LENGTH } from "types";
import { LoginInterface } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


import "./Login.css"

export const Login = () => {

  const navigate = useNavigate();
  const {authUser, setAuthUser} = useContext(AuthContext);

  const [login, setLogin] = useState<LoginInterface>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: value
    });
  }

  const handleLoginForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // formRegisterValidation(register)
    try {
      const response = await publicAxios.post<LoginResponse>('/auth/login', login, {withCredentials: true})
      setAuthUser(()=> response.data)
      navigate(`/${response.data.role}`)
    } catch(e) {
      console.error(e)
    }
  
  }


    return (
        <div className="login">
          <form onSubmit={handleLoginForm}>
            <p>Email</p>
            <input 
              type="text" 
              name="email" 
              placeholder="email"
              required={true}
              maxLength={USER_INPUT_EMAIL_MAX_LENGTH}
              onChange={handleChange}
            />
            <p>Password</p>
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              required={true}
              maxLength={USER_INPUT_PASSWORD_MAX_LENGTH}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
  );
}