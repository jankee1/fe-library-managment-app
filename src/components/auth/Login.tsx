import { stringify } from "querystring";
import { useState } from "react";

export const Login = () => {

  interface LoginData {
    email: string;
    password: string
  }

  const [login, setLogin] = useState<LoginData>({
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
            <input 
              type="text" 
              name="email" 
              placeholder="email"
              required={true}
              onChange={handleChange}
            />
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