import { useState, useEffect } from "react";
import { useParams } from "react-router";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";

/** Company page.
 *
 * Renders information about a company, along with the jobs at that company.
 *
 * Route: /companies/:handle
 *
 * Renders: Company, JobCardList
 */

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const getCompany = async () => {
      setCompany(await JoblyApi.getCompany(handle));
    };
    getCompany();
  }, [handle]);

  return (
    <div className="Company">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
};

export default Company;
