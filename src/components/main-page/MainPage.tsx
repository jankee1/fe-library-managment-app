import {
    Link, Outlet
  } from "react-router-dom";
export const MainPage = () => {
    return (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Outlet />
        </>
  );
}