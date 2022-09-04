import { Link, Outlet } from "react-router-dom";

export const Admin = () => {
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
                    <button>Logout</button>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
  );
}