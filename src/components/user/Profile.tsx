import { useState } from "react";
import { Button } from "../common/Button";

export const Profile = () => {

    const user = {
        firstName: "Test name",
        lastName: "Lastname test",
        email: "test@email.com",
        userSince: "2019",
        borrowedBooks: 5,
        feesTotal: 20
    }

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)

    const updateProfile = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }

    return (
        <div>
            <form onSubmit={updateProfile}>
                <p>Firstname</p>
                <input type="text" name="firstName" id="" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <p>Lastname</p>
                <input type="text" name="lastName" id="" value={lastName} onChange={e => setLastName(e.target.value)} />
                <p>Email</p>
                <p>{user.email}</p>
                <p>Registrationdate</p>
                <p>{user.userSince}</p>
                <p>Number of borrowed books</p>
                <p>{user.borrowedBooks}</p>
                <p>Total sum of fees</p>
                <p>{user.feesTotal}</p>
                <Button type="submit" text="Update profile" />
            </form>
        </div>
  );
}