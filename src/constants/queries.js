import React from "react";
import gql from 'graphql-tag';

export const TOPSTORIES_QUERY = gql`
  query topStoriesQuery {
    stories @rest(type: "stories", path: "/svc/topstories/v2/home.json?api-key=6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo") {
      results @type(name: "results") {
        title,
        abstract,
        url,
        section,
        byline
      }
    }
  }
`;

export const BOOKS_QUERY = gql`
  query booksQuery {
    books @rest(type: "books", path: "/svc/books/v3/lists/current/hardcover-fiction.json?api-key=6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo") {
      results @type(name: "results") {
        books  @type(name: "books") {
          primary_isbn10,
          selected,
          book_image,
          title,
          contributor,
          description,
          amazon_product_url
        }
      }
    }
  }
`;

export const CATEGORIES_QUERY = gql`
  query categoriesQuery {
    categories @rest(type: "categories", path: "/svc/books/v3/lists/names.json?api-key=6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo") {
      results @type(name: "results") {
        list_name_encoded,
        display_name,
      },
      selected
    }
  }
`;
