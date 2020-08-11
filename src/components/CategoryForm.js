import React from "react";

export default function CategoryForm ({data, selected, handleOnSubmit, handleOnChange}) {

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <select
        id="category"
        value={selected}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        <option value="" key="" />
        {data.map(({ list_name_encoded, display_name }) => (
          <option value={list_name_encoded} key={list_name_encoded}>
            {display_name}
          </option>
        ))}
      </select>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};
