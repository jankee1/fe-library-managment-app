import { Link } from "react-router-dom";
import { Logout } from "../../auth/Logout";

export const AdminNav = () => {
    return (
        <>
            <nav>
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