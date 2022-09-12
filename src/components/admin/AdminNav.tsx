import { Link, Outlet } from "react-router-dom";
import { Button } from "../common";

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
                        <Button type="button" text="Logout" />
                    </li>
                </ul>
            </nav>
        </>
  );
}