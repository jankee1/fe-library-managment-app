export const Login = () => {
    return (
        <div className="login">
          <form action="">
            <input 
              type="text" 
              name="email" 
              placeholder="email"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
  );
}