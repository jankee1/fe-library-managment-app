import { useState } from "react";
import { Button } from "../common";

export const Register = () => {

  interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
  }

  const [register, setRegister] = useState<RegisterData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setRegister({
      ...register,
      [e.target.name]: value
    });
  }

  const handleRegisterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(register)
  }

    return (
        <div >
          <form onSubmit={handleRegisterForm}>
            <input 
              type="text" 
              name="firstName" 
              required={true}
              placeholder="First name"
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="lastName" 
              required={true}
              placeholder="Last name"
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              required={true}
              placeholder="Email"
              onChange={handleChange}
            />
            <input 
              type="password" 
              name="password" 
              required={true}
              placeholder="Password"
              onChange={handleChange}
            />
            <input 
              type="password" 
              name="repeatPassword" 
              required={true}
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <Button type="submit" text="Register"/>
          </form>
        </div>
  );
}