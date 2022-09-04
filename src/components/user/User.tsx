import { Link, Outlet } from "react-router-dom";

export const User = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="book">All books</Link>
                </li>
                <li>
                    <Link to="borrowed-books">Borrowed books</Link>
                </li>
                <li>
                    <Link to="profile">My profile</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
  );
}