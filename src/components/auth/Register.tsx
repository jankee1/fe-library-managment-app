import { useState } from "react";
import { formRegisterValidation } from "../../helpers/form-validation.helpers";
import { RegisterInterface } from "../../types";
import { Button } from "../common";

export const Register = () => {

  const [register, setRegister] = useState<RegisterInterface>({
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
    // formRegisterValidation(register)




  }

    return (
        <div >
          <form onSubmit={handleRegisterForm}>
            <p>First name</p>
            <input 
              type="text" 
              name="firstName" 
              required={true}
              pattern={"[A-Za-z]"}
              placeholder="First name"
              onChange={handleChange}
            />
            <p>Last name</p>
            <input 
              type="text" 
              name="lastName" 
              required={true}
              pattern={"[A-Za-z]"}
              placeholder="Last name"
              onChange={handleChange}
            />
            <p>Email</p>
            <input 
              type="email" 
              name="email" 
              required={true}
              placeholder="Email"
              onChange={handleChange}
            />
            <p>Password</p>
            <input 
              type="password" 
              name="password" 
              required={true}
              placeholder="Password"
              onChange={handleChange}
            />
            <p>Confirm password</p>
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