import { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchBar from "../search_bar/SearchBar";
import CompanyCard from "./CompanyCard";

/** Show list of companies.
 *
 * On mount, loads companies from API.
 *
 * Search form reloads companies list based on search criteria.
 *
 * Route: /companies
 *
 * Renders: SearchBar, CompanyCard
 */

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  const search = async (name) => {
    let returnedCompanies = await JoblyApi.getCompanies(name);
    setCompanies(returnedCompanies);
  };

  useEffect(() => {
    search();
  }, []);

  const companiesList = companies.map((company) => (
    <CompanyCard
      key={company.handle}
      handle={company.handle}
      name={company.name}
      description={company.description}
    />
  ));

  return (
    <div className="row justify-content-center" style={{ textAlign: "center" }}>
      <div className="col-md-7 col-lg-5 col-sm-10 col-12">
        <SearchBar search={search} />
        {companies.length ? (
          <div className="CompaniesList-list">{companiesList}</div>
        ) : (
          <p className="lead">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default CompaniesList;
