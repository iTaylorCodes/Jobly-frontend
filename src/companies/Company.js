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
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const getCompany = async () => {
      setCompany(await JoblyApi.getCompany(handle));
    };
    getCompany();
  }, [handle]);

  return (
    <div className="row justify-content-center" style={{ textAlign: "center" }}>
      <div className="col-md-7 col-lg-5 col-sm-10 col-12">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
        {company.jobs ? <JobCardList jobs={company.jobs} /> : ""}
      </div>
    </div>
  );
};

export default Company;
