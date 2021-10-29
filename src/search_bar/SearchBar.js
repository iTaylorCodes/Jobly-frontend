import { useState } from "react";
import "./SearchBar.css";

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
      <form className="SearchBar-form input-group" onSubmit={handleSubmit}>
        <div className="form-outline">
          <input
            className="form-control"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
