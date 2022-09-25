import { Link } from "react-router-dom";
import { Logout } from "../../auth/Logout";

import "./UserNav.css"

export const UserNav = () => {
    return (
        <>
            <nav className="user-nav">
                <ul>
                    <li>
                        <Link to="library">Library</Link>
                    </li>
                    <li>
                        <Link to="borrowed-book">Borrowed books</Link>
                    </li>
                    <li>
                        <Link to="profile">My profile</Link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </nav>
        </>
  );
}