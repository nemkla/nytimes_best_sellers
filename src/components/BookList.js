import React from "react";
import BookCard from "./BookCard";

import { useQuery } from "@apollo/client";
import { BOOKS_QUERY } from "../constants/queries";

function BooksList() {
  console.log("Render: BooksList");

  const { loading, error, data } = useQuery(BOOKS_QUERY);
  const LoadingIndicator = () => <p>Loading ...</p>;
  const ErrorMessage = () => <p>Oops, something went wrong ...</p>;
  const EmptyMessage = () => <p>No Data Available ...</p>;

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (data && data.books.results.books.length === 0) {
    return <EmptyMessage />;
  }

  return (
    data.books.results.books &&
    data.books.results.books.map((book, i) => (
      <BookCard key={book.primary_isbn10} book={book} />
    ))
  );
}

export default BooksList;
