import React from "react";
import BookCard from "./BookCard";

function BooksList({ books, handleChange}) {
  return (
    <>
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </>
  );
}
export default BooksList;
