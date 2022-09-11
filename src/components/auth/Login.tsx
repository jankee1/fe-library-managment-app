import { useState } from "react";
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
              onChange={handleChange}
            />
            <p>Password</p>
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              required={true}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
  );
}