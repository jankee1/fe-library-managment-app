import { useState } from "react";
import DatePicker from "react-datepicker";
import { usePrivateAxios } from "../../hooks/usePrivateAxios";
import { BookNew } from "types";

import "react-datepicker/dist/react-datepicker.css";

interface AdminCreateNewBookProps {
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminCreateNewBook = (props: AdminCreateNewBookProps) => {

    const privateAxios = usePrivateAxios()
    const [bookDetails, setBookDetails] = useState<BookNew>({
        authorFirstName: '',
        authorLastName: '',
        numberOfAvailable: 0,
        publishedOn: new Date(),
        title: ''
    })

    const updateBookDetails = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): Promise<void> => {
        e.preventDefault();
        const value = e.target.value;
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.name !== "numberOfAvailable" ? value : Number(value)
          });
    }

    const createBook = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await privateAxios.post('book', bookDetails)
            props.setIsLoaded(false)
            clearForm()
        } catch(e){console.error(e)}
    }

    const clearForm = () => {
        setBookDetails({
            authorFirstName: '',
            authorLastName: '',
            numberOfAvailable: 0,
            publishedOn: new Date(),
            title: ''
        })
    }
    
    return (
        <>
            <form onSubmit={createBook}>
                <p>Title</p>
                <input type="text" name="title" id="" value={bookDetails.title} onChange={updateBookDetails} />
                <p>Author's first name</p>
                <input type="text" name="authorFirstName" id="" value={bookDetails.authorFirstName} onChange={updateBookDetails} />
                <p>Author's last name</p>
                <input type="text" name="authorLastName" id="" value={bookDetails.authorLastName} onChange={updateBookDetails} />
                <p>Release date</p>
                <DatePicker selected={bookDetails.publishedOn} onChange={(date) =>  {
                    if(date === null)
                        date = new Date()
                        setBookDetails({...bookDetails, publishedOn: date})
                    }} 
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date("01/01/1900")}
                    maxDate={new Date()}
                    showMonthYearDropdown
                    dropdownMode= "select"
                />
                <p>In Stock</p>
                <input type="number" name="numberOfAvailable" id="" min={1} value={bookDetails.numberOfAvailable} onChange={updateBookDetails} />
                <button type="submit">Create book</button> 
                <button type="button" onClick={clearForm}>Clear form</button>
            </form>
        </>
  );
}