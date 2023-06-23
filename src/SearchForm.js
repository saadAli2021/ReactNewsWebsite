import React, { useRef } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  const tf = useRef();
  return (
    <section className="search">
      <input
        ref={tf}
        value={query}
        type="text"
        className="searchTF"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button
        className="searchBTN btn"
        onClick={() => handleSearch(tf.current)}
      >
        Search
      </button>
    </section>
  );
};

export default SearchForm;
