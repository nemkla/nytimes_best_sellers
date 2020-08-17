import React, { useState }  from "react";
import BookList from "./BookList";

import { useQuery, useMutation } from "@apollo/client";
import { CATEGORIES_QUERY } from "../constants/queries";


export default function CategoryForm() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);
  const LoadingIndicator = () => <p>Loading ...</p>;
  const ErrorMessage = () => <p>Oops, something went wrong ...</p>;
  const EmptyMessage = () => <p>No Data Available ...</p>;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOnChange = (value) => setSelectedCategory(value);

  const Books = ({category}) => {
    if (category) {
      return <BookList category={category}/>
    }
    else {
      return null;
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  if (data && data.categories.results.length === 0) {
    return <EmptyMessage />;
  }
  return (
    data && data.categories.results &&

    <>
    <form className="form" onSubmit={(e)=>{ e.preventDefault(); }}>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        <option value="" key="" />
        {data.categories.results.map(({ list_name_encoded, display_name }) => (
          <option value={list_name_encoded} key={list_name_encoded}>
            {display_name}
          </option>
        ))}
      </select>
      <button className="button" type="submit">
        Search
      </button>
    </form>
    <Books category={selectedCategory}/>
    </>
  );
}
