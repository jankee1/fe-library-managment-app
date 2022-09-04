export const Register = () => {
    return (
        <div className="register">
          <form action="">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First name"
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last name"
            />
            <input 
              type="text" 
              name="email" 
              placeholder="Email"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password"
            />
            <input 
              type="password" 
              name="repeatPassword" 
              placeholder="Confirm password"
            />
            <button type="submit">Register</button>
          </form>
        </div>
  );
}