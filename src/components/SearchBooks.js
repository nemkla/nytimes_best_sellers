import React, { useState } from "react";
import BookList from "./BookList";
import CategoryForm from "./CategoryForm";
import "../styles/SearchBooks.css";

function SearchBooks() {
  console.log("Render: SearchBooks");

  return (
    <>
      <CategoryForm />
    </>
  );
}

export  default SearchBooks;
