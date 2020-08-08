import React from "react";
import BookCard from "./BookCard";

function BooksList({ books}) {
  console.log('Render: BooksList');
  return (
    <>
      {books.map((book, i) => (
        <BookCard key={book.primary_isbn10}  book={book} />
      ))}
    </>
  );
}
export default BooksList;
