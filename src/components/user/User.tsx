import { Link, Outlet } from "react-router-dom";
import { Button } from "../common/Button";

export const User = () => {
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
                        <Button type="button" text="Logout"/>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
  );
}