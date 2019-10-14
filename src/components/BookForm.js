import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

export default function BookForm() {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState("");
    const [author, setAuhor] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_BOOK",
            book: {
                title,
                author
            }
        });
        setTitle("");
        setAuhor("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={e => setAuhor(e.target.value)}
                required
            />

            <input type="submit" value="Add Book" />
        </form>
    );
}
