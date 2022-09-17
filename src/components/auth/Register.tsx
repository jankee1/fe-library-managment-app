import { useState } from "react";
import { RegisterInterface } from "../../types";
import { Button } from "../common";
import {USER_INPUT_EMAIL_MAX_LENGTH, USER_INPUT_FIRSTNAME_MAX_LENGTH, USER_INPUT_FIRSTNAME_MIN_LENGTH, USER_INPUT_PASSWORD_MAX_LENGTH} from 'types'
import { publicAxios } from "../../api/axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate();

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

  const handleRegisterForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // formRegisterValidation(register)
    const response = await publicAxios.post('/user', register)
    console.log(response)
    navigate('/login')

  }

    return (
        <div className="register">
          <form onSubmit={handleRegisterForm}>
            <p>First name</p>
            <input 
              type="text" 
              name="firstName" 
              required={true}
              minLength={USER_INPUT_FIRSTNAME_MIN_LENGTH}
              maxLength={USER_INPUT_FIRSTNAME_MAX_LENGTH}
              placeholder="First name"
              onChange={handleChange}
            />
            <p>Last name</p>
            <input 
              type="text" 
              name="lastName" 
              required={true}
              minLength={USER_INPUT_FIRSTNAME_MIN_LENGTH}
              maxLength={USER_INPUT_FIRSTNAME_MAX_LENGTH}
              placeholder="Last name"
              onChange={handleChange}
            />
            <p>Email</p>
            <input 
              type="email" 
              name="email" 
              required={true}
              maxLength={USER_INPUT_EMAIL_MAX_LENGTH}
              placeholder="Email"
              onChange={handleChange}
            />
            <p>Password</p>
            <input 
              type="password" 
              name="password" 
              required={true}
              maxLength={USER_INPUT_PASSWORD_MAX_LENGTH}
              placeholder="Password"
              onChange={handleChange}
            />
            <p>Confirm password</p>
            <input 
              type="password" 
              name="repeatPassword" 
              required={true}
              maxLength={USER_INPUT_PASSWORD_MAX_LENGTH}
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <Button type="submit" text="Register"/>
          </form>
        </div>
  );
}