import { useState } from "react";
import { Button } from "../common";

export const AdminCreateNewBook = () => {

    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [publishedOn, setPublishedOn] = useState('')
    const [numberOfAvailable, setNumberOfAvailable] = useState<number>()

    const createBook = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    

    return (
        <form onSubmit={createBook}>
            <p>Title</p>
            <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
            <p>Author first name</p>
            <input type="text" name="firstName" id="" onChange={e => setFirstName(e.target.value)} />
            <p>Author last name</p>
            <input type="text" name="lastName" id="" onChange={e => setLastName(e.target.value)} />
            <p>Published on</p>
            <input type="date" name="publishedOn" id="" onChange={e => setPublishedOn(e.target.value)} />
            <p>Number of available books</p>
            <input type="number" min="1" name="numberOfAvailable" id="" onChange={e => setNumberOfAvailable(Number(e.target.value))} />

            <Button type="submit" text="Create new book" />
        </form>
  );
}