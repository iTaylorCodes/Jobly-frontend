import { useState } from "react";

/** Search Bar.
 *
 * Handles searching in CompaniesList and JobsList.
 *
 * Renders on CompaniesList and JobsList components.
 */

const SearchBar = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <form className="SearchBar-form form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg flex-grow-1"
          name="searchTerm"
          value={searchTerm}
          placeholder="Looking for something?"
          onChange={handleChange}
        />
        <button className="btn btn-lg btn-primary" type="submit">
          Search!
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
