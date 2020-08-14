import React from "react";
import BookList from "./BookList";
import CategoryForm from "./CategoryForm";
import "../styles/SearchBooks.css";

function SearchBooks() {
  console.log("Render: SearchBooks");
  return (
    <>
    <CategoryForm />
    <BookList />
    </>
  );
}

export  default SearchBooks;
