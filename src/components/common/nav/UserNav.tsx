import { Link } from "react-router-dom";
import { Logout } from "../../auth/Logout";

export const UserNav = () => {
    return (
        <>
            <nav>
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