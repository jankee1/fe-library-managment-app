import { useState } from "react";
import { USER_INPUT_EMAIL_MAX_LENGTH, USER_INPUT_PASSWORD_MAX_LENGTH } from "types";
import { LoginInterface } from "../../types";

export const Login = () => {

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


    return (
        <div className="login">
          <form action="">
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