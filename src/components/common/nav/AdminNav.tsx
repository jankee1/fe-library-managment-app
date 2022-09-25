import { Link } from "react-router-dom";
import { Logout } from "../../auth/Logout";

import "./AdminNav.css"

export const AdminNav = () => {
    return (
        <>
            <nav className="admin-nav">
                <ul>
                    <li>
                        <Link to="library">Library</Link>
                    </li>
                    <li>
                        <Link to="borrowed-book">Borrowed books statistics</Link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </nav>
        </>
  );
}