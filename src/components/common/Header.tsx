import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const Header = () => {
  const {authUser} = useContext(AuthContext)
    return (
      <header className="header">
        <h1>Library Managment App</h1>
      </header>
    );
  }