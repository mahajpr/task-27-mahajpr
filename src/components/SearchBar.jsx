import { useRef, useEffect } from "react";

function SearchBar({ search, setSearch }) {

  const inputRef = useRef();
  const previousSearch = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
    
      ref={inputRef}
      type="text"
      placeholder="Search Course"
      value={search}
      onChange={(e) => {
        previousSearch.current = search;
        setSearch(e.target.value);}}
    />
    
  );
}

export default SearchBar;