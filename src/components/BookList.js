import React from "react";
import BookCard from "./BookCard";

function BooksList({ data }) {
  console.log('Render: BooksList');
  return (
    <>
      {data.map((book, i) => (
        <BookCard key={book.primary_isbn10}  book={book} />
      ))}
    </>
  );
}
export default BooksList;
