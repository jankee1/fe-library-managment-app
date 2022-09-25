import {
    Link, Outlet
  } from "react-router-dom";

import './MainPage.css'
export const MainPage = () => {
    return (
        <div className="main-page">
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
            <Outlet />
        </div>
  );
}